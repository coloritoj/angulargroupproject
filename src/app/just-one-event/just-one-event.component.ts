import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { Favorite } from '../favorite';
import { FavoriteAPIService } from '../favorite-api.service';
import { FavoritesListComponent } from '../favorites-list/favorites-list.component';


@Component({
  selector: 'app-just-one-event',
  templateUrl: './just-one-event.component.html',
  styleUrls: ['./just-one-event.component.css']
})
export class JustOneEventComponent implements OnInit {

  @Input() theEvent?: Event;

  allFavorites: Favorite[] = [];

  showdetails: boolean = false;
  FavAdded: boolean = false;

  constructor(private favapiservice: FavoriteAPIService) { }

  ngOnInit(): void {
  }

  showMoreDetails(){
    this.showdetails = true;
  }
  
  hideMoreDetails(){
    this.showdetails = false;
  }

  ToggleFavAdded(){
    this.FavAdded = true;
  }


  favs: Event [] = [];

  refreshList() {
    this.favapiservice.listFavorites(
      (results: any) => {
        this.allFavorites = results;
      }
    );
  }

  addToFavs() {
    if (this.theEvent) {
      let fav: Favorite = {
        id: 0,
        name:this.theEvent.name,
        type: this.theEvent.type,
        description: this.theEvent.description,
        maxcapacity:this.theEvent.maxcapacity,
        eventfull: this.theEvent.eventfull
      };
      this.favapiservice.addToFavorites(fav,
        () => {
          this.refreshList();
        }
      );
    }
  }

  removeFav(id: number){
    this.favapiservice.removeFav(
      id, () => {
        this.refreshList();
      }
    )
  }
  
}
