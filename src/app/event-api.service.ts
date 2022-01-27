import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';


@Injectable({
  providedIn: 'root'
})
export class EventAPIService {

  constructor(private http: HttpClient) { }

  getEvents(cb: any){
    this.http.get<Event[]>('https://localhost:44333/event').subscribe(cb)
  }

  addEvent(newEvent: Event, cb: any){
    this.http.post<Event[]>('https://localhost:44333/event', newEvent).subscribe(cb)
  }

  deleteEvent(id:number, cb: any){
    this.http.delete(`https://localhost:44333/event?id=${id}`).subscribe(cb)
  }
}
