import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListformationPage } from './listformation.page';

const routes: Routes = [
  {
    path: '',
    component: ListformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListformationPageRoutingModule {}
