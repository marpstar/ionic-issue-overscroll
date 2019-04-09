import { Component, OnInit } from '@angular/core';
import data from './modal.data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  items: { '_id': string; }[];

  constructor() {
    this.items = data;
    console.log('modal!');
  }

  ngOnInit() {
  }

}
