import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAcountPageRoutingModule } from './modal-acount-routing.module';

import { ModalAcountPage } from './modal-acount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAcountPageRoutingModule
  ],
  declarations: [ModalAcountPage],
  exports: [ModalAcountPage]
})
export class ModalAcountPageModule {}
