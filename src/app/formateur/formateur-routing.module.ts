import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormateurPage } from './formateur.page';

const routes: Routes = [
  {
    path: '',
    component: FormateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormateurPageRoutingModule {}
