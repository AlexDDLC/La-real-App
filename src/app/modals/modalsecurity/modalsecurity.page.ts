import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalsecurity',
  templateUrl: './modalsecurity.page.html',
  styleUrls: ['./modalsecurity.page.scss'],
})
export class ModalsecurityPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
