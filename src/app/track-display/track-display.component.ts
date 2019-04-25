import { Component, OnInit } from '@angular/core';
import { PlayListServiceService } from '../play-list-service.service';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-track-display',
  templateUrl: './track-display.component.html',
  styleUrls: ['./track-display.component.scss']
})
export class TrackDisplayComponent implements OnInit {
  songs: Track[];
  constructor(private playlistService: PlayListServiceService) { }
  deleteSong1(){
    this.playlistService.removeFromPlaylist1(this.songs['id'])
  }
  deleteSong2(){
    this.playlistService.removeFromPlaylist2(this.songs['id'])
  }
  ngOnInit() {
  }

}
