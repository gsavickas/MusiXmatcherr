import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-display',
  templateUrl: './play-list-display.component.html',
  styleUrls: ['./play-list-display.component.scss']
})
export class PlayListDisplayComponent implements OnInit {

playlists = [
  {title: "Coding Beats", id: 1},
  {title: "Cooking Music", id: 2},
  {title: "Study Sounds", id: 3}
]

displayedColumns = ['id', 'title', 'delete'];

  constructor() {}

  ngOnInit() {}

  displayTracks() {
    console.log('click works for displayTracks function')
  }

  deletePlaylist(){
    console.log('button works')
  }

}
