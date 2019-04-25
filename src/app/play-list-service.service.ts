import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayListServiceService {
  playlist1: Object[];
  playlist2: Object[];
  constructor() { }
  addToPlaylist1(song){
    this.playlist1.push(song)
    localStorage.setItem('playlist1', JSON.stringify(this.playlist1));
  }
  addToPlaylist2(song){
    this.playlist2.push(song)
    localStorage.setItem('playlist2', JSON.stringify(this.playlist2))
  }
  removeFromPlaylist1(idx){
    this.playlist1.slice(idx, 1)
    localStorage.setItem('playlist1', JSON.stringify(this.playlist1));
  }
  removeFromPlaylist2(idx){
    this.playlist2.slice(idx, 2)
    localStorage.setItem('playlist2', JSON.stringify(this.playlist2))
  }
}
