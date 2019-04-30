import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  favClicked = false;
  constructor(private favServ: FavoriteService) { }
  @Output() displayFavorites: EventEmitter<any> = new EventEmitter();
  favoriteDataSource() {
    this.favClicked = true;
    this.displayFavorites.emit(
      this.favClicked
      );
  }
  ngOnInit() {
  }

}
