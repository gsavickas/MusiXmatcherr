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
  audio = new Audio();
  
  @Input() results;
  constructor(private snackBar: MatSnackBar, private favoriteService: FavoriteService) { }

  passToFavorites(song: Track){
    this.favoriteService.addToFavorites(song);
  }

  openSnackBar(message: string, song: Track){
    this.audio.src = song.previewURL;
    this.audio.load();
    this.audio.play();

    this.snackBar.open(message, song.name, {
      duration: 2000,
    });
  }

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.results.sort = this.sort;
  }

}
