import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerapprenantPage } from './creerapprenant.page';

const routes: Routes = [
  {
    path: '',
    component: CreerapprenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerapprenantPageRoutingModule {}
