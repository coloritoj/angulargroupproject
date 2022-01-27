import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { FavoritesListComponent } from '../favorites-list/favorites-list.component';


@Component({
  selector: 'app-just-one-event',
  templateUrl: './just-one-event.component.html',
  styleUrls: ['./just-one-event.component.css']
})
export class JustOneEventComponent implements OnInit {

 @Input() theEvent?: Event;

  showdetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreDetails(){
    this.showdetails = true;
  }
  
  hideMoreDetails(){
    this.showdetails = false;
  }

  favs: Event [] = [];

  addToFavs(fav: Event): Event[] {
    this.favs.push(fav);
    return this.favs;
  }
  
}
