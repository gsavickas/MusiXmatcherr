import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatSnackBar } from '@angular/material';
import { SearchComponent } from '../search/search.component';
import { FavoriteService } from '../favorite.service';




@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.scss']
})
export class SearchDisplayComponent implements OnInit {
  displayedColumns = ['fav', 'name', 'artistName', 'albumName', 'previewURL'];

  @Input() results;
  constructor(private snackBar: MatSnackBar, private favoriteService: FavoriteService) { }

  passToFavorites(result){
    this.favoriteService.addToFavorites(result);
  }

  openSnackBar(message: string, action: string){
    action = this.results.name;
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.results.sort = this.sort;
  }

}
