import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayListServiceService {
  playlist1: Object[];
  playlist2: Object[];
  private nextID: number = 0;
  constructor() { }
  addToPlaylist1(song){
    song['Id'] = this.nextID;
    this.nextID++;
    this.playlist1.push(song);
    localStorage.setItem('playlist1', JSON.stringify(this.playlist1));
  }
  addToPlaylist2(song){
    song['Id'] = this.nextID;
    this.nextID++;
    this.playlist2.push(song)
    localStorage.setItem('playlist2', JSON.stringify(this.playlist2))
  }
  removeFromPlaylist1(id){
    this.playlist1.slice(id, 1)
    localStorage.setItem('playlist1', JSON.stringify(this.playlist1));
  }
  removeFromPlaylist2(id){
    this.playlist2.slice(id, 2)
    localStorage.setItem('playlist2', JSON.stringify(this.playlist2))
  }
}
