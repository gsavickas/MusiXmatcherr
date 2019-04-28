import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.scss']
})
export class SearchDisplayComponent implements OnInit {
  displayedColumns = ['fav', 'track', 'artist', 'album'];

  @Input() results;
  constructor() { }

  ngOnInit() {
  }

}
