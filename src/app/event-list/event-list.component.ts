import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventAPIService } from '../event-api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  
  allEvents: Event[] = [];

  constructor(private eventapiservice: EventAPIService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.eventapiservice.getEvents(
      (results: any) => {
        this.allEvents = results;
      }
    );
  }

 addEvent(newEvent: Event) {
   this.eventapiservice.addEvent(newEvent,
    () => {
      this.refreshList();
    }
    )
 }

 deleteEvent(id: number){
   this.eventapiservice.deleteEvent(
     id, () => {
       this.refreshList();
     }
   )
 }

}
