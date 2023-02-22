import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerapprenantPageRoutingModule } from './creerapprenant-routing.module';

import { CreerapprenantPage } from './creerapprenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerapprenantPageRoutingModule
  ],
  declarations: [CreerapprenantPage]
})
export class CreerapprenantPageModule {}
