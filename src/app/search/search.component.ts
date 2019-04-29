import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs';
import { Track } from '../models/track.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  results: Track[] = [];
  @Input() curDataSource;
  constructor( private searchService: SearchService ) { 
    // this.searchService.getTracks().subscribe(val => this.results = val);
  }

  getSearch(){
    this.searchService.getSearchResults(this.searchQuery).subscribe(res => this.results = res);
    this.curDataSource = this.results;
  }

  ngOnInit() {
    
  }

}
