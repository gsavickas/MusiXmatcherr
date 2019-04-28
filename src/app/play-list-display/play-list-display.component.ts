import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-display',
  templateUrl: './play-list-display.component.html',
  styleUrls: ['./play-list-display.component.scss']
})
export class PlayListDisplayComponent implements OnInit {

playlists: Object[]=[
  {title: "Coding Beats", id: 1},
  {title: "Cooking Music", id: 2}
]

  constructor() { }

  ngOnInit() {
  }

  displayTracks(){
    console.log('click works for displayTracks function')
  }

}
