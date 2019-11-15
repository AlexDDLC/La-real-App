import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalnotificationPageRoutingModule } from './modalnotification-routing.module';

import { ModalnotificationPage } from './modalnotification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalnotificationPageRoutingModule
  ],
  declarations: [ModalnotificationPage],
  exports:[ModalnotificationPage]
})
export class ModalnotificationPageModule {}
