import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() theFav?: Event;

 

}
