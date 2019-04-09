import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /**
   *
   */
  constructor(private modal: ModalController) {

  }
  async onClick() {
    const modal = await this.modal.create({
    component: ModalPage,
    componentProps: { value: 123 }
    });

    await modal.present();

  }
}
