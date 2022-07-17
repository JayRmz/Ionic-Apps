import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalInfoPage} from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onClick(){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Jay',
        country: 'Mexico'
      }
    });

    await modal.present();

    // let {data} = await modal.onDidDismiss();


    let {data} = await modal.onWillDismiss();


  }

}
