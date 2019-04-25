import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackContainer } from './models/track.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchResults(searchQuery: string){
    return this.http.get(`http://api.musixmatch.com/ws/1.1/track.search?q=${searchQuery}&apikey=7d2a2a73f5654da26590892785c1ff47`).pipe(map((res: Object) => res['message'].body.tracklist))
  }
}
