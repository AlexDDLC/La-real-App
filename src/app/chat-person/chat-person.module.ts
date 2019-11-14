import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPersonPageRoutingModule } from './chat-person-routing.module';

import { ChatPersonPage } from './chat-person.page';

import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPersonPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatPersonPage]
})
export class ChatPersonPageModule { }
