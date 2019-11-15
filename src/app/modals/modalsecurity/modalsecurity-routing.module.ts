import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsecurityPage } from './modalsecurity.page';

const routes: Routes = [
  {
    path: '',
    component: ModalsecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalsecurityPageRoutingModule {}
