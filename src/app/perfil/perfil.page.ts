import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalAcountPage } from '../modals/modal-acount/modal-acount.page';
import { ModalsecurityPage } from '../modals/modalsecurity/modalsecurity.page';
import { ModalnotificationPage } from '../modals/modalnotification/modalnotification.page';
import { ModalInfoPage } from '../modals/modal-info/modal-info.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private alert: AlertController,
    private modalController: ModalController) { }

  async  notifications() {
    const modal = await this.modalController.create(
      {
        component: ModalnotificationPage
      }
    );
    modal.present();
  }

  async security() {
    const modal = await this.modalController.create(
      {
        component: ModalsecurityPage
      }
    );
    modal.present();
  }

  async settingsAcount() {
    const modal = await this.modalController.create(
      {
        component: ModalAcountPage
      }
    );
    modal.present();
  }

  async showInformation() {
    const modal = await this.modalController.create({
      component: ModalInfoPage
    });
    modal.present();
  }

  async cerrarSesion() {
    const alert = await this.alert.create({
      header: '¿Cerrar sesión?',
      buttons:
        [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Aceptar');
            }
          }
        ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
