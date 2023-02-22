import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerformationPage } from './creerformation.page';

const routes: Routes = [
  {
    path: '',
    component: CreerformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerformationPageRoutingModule {}
