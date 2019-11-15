import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalnotification',
  templateUrl: './modalnotification.page.html',
  styleUrls: ['./modalnotification.page.scss'],
})
export class ModalnotificationPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
