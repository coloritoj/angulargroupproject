import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  newEvent: Event = {
    id: 0,
    name: '',
    type: '',
    description: '',
    maxcapacity: 0,
    eventfull: false
  }

  @Output() addEvent: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  addevent(){
    this.addEvent.emit(this.newEvent)
  }
}
