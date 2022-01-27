import { Component, EventEmitter, Output } from '@angular/core';
import { Event } from './event';
import { JustOneEventComponent } from './just-one-event/just-one-event.component';
import { AddEventComponent } from './add-event/add-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularGroupProject';
}
