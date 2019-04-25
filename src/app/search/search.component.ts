import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string

  constructor( private searchService: SearchService ) { }

  getSearch(){
    this.searchService.getSearchResults(this.searchQuery);
  }

  ngOnInit() {
  }

}
