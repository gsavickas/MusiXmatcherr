import { Component } from '@angular/core';
import { Track } from './models/track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MusixMatcherr';
  curDataSource: Array<Track> = [];
}
