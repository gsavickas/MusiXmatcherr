import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackContainer } from './models/track.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  trackList: TrackContainer[];

  constructor(private http: HttpClient) { }

  getSearchResults(searchQuery: string){
    this.http.get(`http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${searchQuery}&page_size=20&apikey=7d2a2a73f5654da26590892785c1ff47`).pipe(map((res: Object) => res['message'].body.tracklist)).subscribe(res => this.trackList = res);
  }

  getTracks(){
    return of(this.trackList);
  }
}
 