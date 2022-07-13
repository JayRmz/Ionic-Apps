import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  searchText = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getAlbums().subscribe(albums => {
     this.albums = albums;
   });
  }

  searchChanged(ev) {
    console.log(ev);
    this.searchText = ev.detail.value;
  }

}
