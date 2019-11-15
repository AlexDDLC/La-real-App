import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsecurityPageRoutingModule } from './modalsecurity-routing.module';

import { ModalsecurityPage } from './modalsecurity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsecurityPageRoutingModule
  ],
  declarations: [ModalsecurityPage],
  exports: [ModalsecurityPage]
})
export class ModalsecurityPageModule {}
