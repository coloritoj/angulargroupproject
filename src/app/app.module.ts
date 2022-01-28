import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { JustOneEventComponent } from './just-one-event/just-one-event.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    FavoritesListComponent,
    AddEventComponent,
    JustOneEventComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
