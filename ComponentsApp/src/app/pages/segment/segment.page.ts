import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheros: Observable<any>;
  filterBy;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superheros = this.dataService.getSuperheros();
  }

  segmentChanged(ev){
    if (ev.detail.value == 'all') {
      this.filterBy = '';
      return;
    }
    this.filterBy = ev.detail.value;
  }
}
