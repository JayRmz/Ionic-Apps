import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  fav = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.fav = !this.fav;
  }

}
