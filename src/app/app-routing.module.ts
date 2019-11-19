import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'chat-person',
    loadChildren: () => import('./chat-person/chat-person.module').then(m => m.ChatPersonPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'modal-acount',
    loadChildren: () => import('./modals/modal-acount/modal-acount.module').then(m => m.ModalAcountPageModule)
  },
  {
    path: 'modalsecurity',
    loadChildren: () => import('./modals/modalsecurity/modalsecurity.module').then(m => m.ModalsecurityPageModule)
  },
  {
    path: 'modalnotification',
    loadChildren: () => import('./modals/modalnotification/modalnotification.module').then(m => m.ModalnotificationPageModule)
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./modals/modal-info/modal-info.module').then(m => m.ModalInfoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }