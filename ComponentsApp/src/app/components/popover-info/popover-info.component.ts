import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  characters = Array(10);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(num: number) {
    this.popoverController.dismiss({
      selected: num
    });
  }
}
