import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePointagePage } from './liste-pointage.page';

const routes: Routes = [
  {
    path: '',
    component: ListePointagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePointagePageRoutingModule {}
