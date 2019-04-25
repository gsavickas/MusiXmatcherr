import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayListServiceService {
  playlist1: Object[];
  playlist2: Object[]
  constructor() { }
  addToPlaylist1(song){
    this.playlist1.push(song)
  }
  addToPlaylist2(song){
    this.playlist2.push(song)
  }
}
