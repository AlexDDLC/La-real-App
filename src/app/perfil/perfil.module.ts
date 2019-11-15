import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { ModalAcountPage } from '../modals/modal-acount/modal-acount.page';
import { ModalsecurityPage } from '../modals/modalsecurity/modalsecurity.page';
import { ModalnotificationPage } from '../modals/modalnotification/modalnotification.page';
import { ModalInfoPage } from '../modals/modal-info/modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule
  ],
  declarations: [PerfilPage,
    ModalAcountPage,
    ModalsecurityPage,
    ModalnotificationPage,
    ModalInfoPage],
  entryComponents:
    [ModalAcountPage,
      ModalsecurityPage,
      ModalnotificationPage,
      ModalInfoPage
    ]
})
export class PerfilPageModule { }
