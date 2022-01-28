import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';


const routes: Routes = [
  { path: '', component: EventListComponent},
  { path: 'favorites', component: FavoritesListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
