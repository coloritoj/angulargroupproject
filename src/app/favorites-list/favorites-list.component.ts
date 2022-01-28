import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';
import { Favorite } from '../favorite';
import { FavoriteAPIService } from '../favorite-api.service';
import { JustOneEventComponent } from '../just-one-event/just-one-event.component';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  allItems: Favorite[] = [];
  showdetails: boolean = false;

  constructor(private favapiservice: FavoriteAPIService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  @Input() theFav?: Event;

  refreshList() {
    this.favapiservice.listFavorites(
      (results: any) => {
        this.allItems = results;
      }
    );
  }
 
  removeFav(id: number) { 
    this.favapiservice.removeFav(
      id, () => {
        this.refreshList();
      }
    )
  }

  showMoreDetails(){
    this.showdetails = true;
  }

  hideMoreDetails(){
    this.showdetails = false;
  }



}
