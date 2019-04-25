import { Component, OnInit } from '@angular/core';
import { PlayListServiceService } from '../play-list-service.service';

@Component({
  selector: 'app-track-display',
  templateUrl: './track-display.component.html',
  styleUrls: ['./track-display.component.scss']
})
export class TrackDisplayComponent implements OnInit {
  songs: Object[];
  constructor(private playlistService: PlayListServiceService) { }
  deleteSong(){

  }
  ngOnInit() {
  }

}
