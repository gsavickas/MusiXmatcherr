import { Injectable } from '@angular/core';
import { Track } from './models/track.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: Track[] = [];
  private nextID: number = 0;
  constructor() { }
  addToFavorites(song){
    song['Id'] = this.nextID;
    this.nextID++;
    this.favorites.push(song);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    console.log(this.favorites);
  }
  getFromFavorites(){
    var favoriteList = localStorage.getItem('favorites');
    return favoriteList;
  }
}
