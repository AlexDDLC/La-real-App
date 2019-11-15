import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-acount',
  templateUrl: './modal-acount.page.html',
  styleUrls: ['./modal-acount.page.scss'],
})
export class ModalAcountPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
