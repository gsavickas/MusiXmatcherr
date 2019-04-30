import { Injectable } from '@angular/core';
import { Track } from './models/track.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: Track[] = [];

  playlist1: Track[] = [];
  playlist2: Track[] = [];

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

  addToPlaylist(song, playlistId){
  song['Id'] = this.nextID;
    this.nextID++;
    if(playlistId == 1){
    this.playlist1.push(song);
    localStorage.setItem('playlist1', JSON.stringify(this.favorites));
    } else if(playlistId == 2){
      this.playlist2.push(song);
      localStorage.setItem('playlist2', JSON.stringify(this.favorites));
    }
    console.log(this.playlist1);
    console.log(this.playlist2)
  }
}
