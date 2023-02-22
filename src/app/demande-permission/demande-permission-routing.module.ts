import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandePermissionPage } from './demande-permission.page';

const routes: Routes = [
  {
    path: '',
    component: DemandePermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandePermissionPageRoutingModule {}
