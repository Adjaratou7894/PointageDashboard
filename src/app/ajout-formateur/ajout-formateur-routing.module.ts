import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutFormateurPage } from './ajout-formateur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutFormateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutFormateurPageRoutingModule {}
