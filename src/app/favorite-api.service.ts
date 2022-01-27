import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from './favorite';


@Injectable({
  providedIn: 'root'
})
export class FavoriteAPIService {

  constructor(private http: HttpClient) { }

  listFavorites(cb: any){
    this.http.get<Favorite[]>('https://localhost:44333/favorites').subscribe(cb)

  }

  addToFavorites(favoritedevent: Favorite, cb: any){
    this.http.post<Favorite[]>('https://localhost:44333/favorites', favoritedevent).subscribe(cb)

  }

  removeFav(id:number, cb: any){
    this.http.delete(`https://localhost:44333/favorites?id=${id}`).subscribe(cb)

  }
}
