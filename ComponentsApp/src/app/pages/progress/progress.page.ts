import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  percentage = 0.00;
  constructor() { }

  ngOnInit() {
  }

  rangeChanged(ev: any) {
    this.percentage = ev.detail.value / 100;
  }

}
