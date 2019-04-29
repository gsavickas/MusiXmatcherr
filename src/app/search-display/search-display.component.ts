import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatSnackBar } from '@angular/material';
import { SearchComponent } from '../search/search.component';
import { FavoriteService } from '../favorite.service';
import { Track } from '../models/track.model';




@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.scss']
})
export class SearchDisplayComponent implements OnInit {

  displayedColumns = ['fav', 'name', 'artistName', 'albumName', 'previewURL'];
  // audio = new Audio();

  @Input() results;
  constructor(private snackBar: MatSnackBar, private favoriteService: FavoriteService) { }

  passToFavorites(song: Track){
    this.favoriteService.addToFavorites(song);
  }

  passToPlaylist(song: Track){
    this.favoriteService.addToPlaylist(song);
  }

  openSnackBar(message: string, song: Track){
    let audio = new Audio();
    audio.pause();
    audio.src = song.previewURL;
    audio.load();
    audio.play();

    let snackRef = this.snackBar.open(message, song.name, {
      duration: 30000,
    });

    snackRef.afterDismissed().subscribe(res => audio.pause());

  }

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.results.sort = this.sort;
  }

}
