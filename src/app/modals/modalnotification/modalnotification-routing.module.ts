import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalnotificationPage } from './modalnotification.page';

const routes: Routes = [
  {
    path: '',
    component: ModalnotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalnotificationPageRoutingModule {}
