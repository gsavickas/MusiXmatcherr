import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './models/track.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // trackList: Track[];

  constructor(private http: HttpClient) { }

  getSearchResults(searchQuery: string){
    return this.http.get(`http://api.napster.com/v2.2/search/verbose?apikey=MGExZDUzNmUtNWJjZi00ZDQxLThhNzItMDA2OTE4NWI1YTQ3&query=${searchQuery}`).pipe(
      map((res: Object) => res['search'].data.tracks))
      // console.log(this.trackList)
  }

  // getTracks(): Observable<Track[]>{
  //   return of(this.trackList);
  // }
}
 