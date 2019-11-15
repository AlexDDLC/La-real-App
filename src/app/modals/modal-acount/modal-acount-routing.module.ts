import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAcountPage } from './modal-acount.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAcountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAcountPageRoutingModule {}
