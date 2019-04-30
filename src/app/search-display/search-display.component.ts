import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchComponent } from '../search/search.component';
import { FavoriteService } from '../favorite.service';
import { Track } from '../models/track.model';




@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.scss']
})
export class SearchDisplayComponent implements OnInit {

  displayedColumns = ['fav', 'add', 'name', 'artistName', 'albumName', 'previewURL'];

  @Input() results;
  constructor(private snackBar: MatSnackBar,
    private favoriteService: FavoriteService,
    public dialog: MatDialog) { }

  passToFavorites(song: Track){
    this.favoriteService.addToFavorites(song);
  }

  openDialog(song: Track): void {
    let dialogRef = this.dialog.open(PlaylistDialog, {
      width: '250px',
      data: song
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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

@Component({
  selector: 'playlist-dialog',
  templateUrl: 'playlist-dialog.html',
})

export class PlaylistDialog {

  constructor(
    private favoriteService: FavoriteService,
    public dialogRef: MatDialogRef<PlaylistDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  passToPlaylist(playlistID: number){

    this.favoriteService.addToPlaylist(this.data, playlistID);
  }

}
