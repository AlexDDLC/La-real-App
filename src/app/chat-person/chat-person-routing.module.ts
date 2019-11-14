import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPersonPage } from './chat-person.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPersonPageRoutingModule {}
