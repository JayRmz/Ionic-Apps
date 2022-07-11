import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:  HTMLIonLoadingElement;
  constructor(private laodingController: LoadingController) { }

  ngOnInit() {
  }

  async showLoading() {
    this.loading = await this.laodingController.create({
      message:' Loading ',
    });

    await this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);
  }

}
