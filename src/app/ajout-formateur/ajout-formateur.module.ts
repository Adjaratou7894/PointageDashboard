import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutFormateurPageRoutingModule } from './ajout-formateur-routing.module';

import { AjoutFormateurPage } from './ajout-formateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutFormateurPageRoutingModule
  ],
  declarations: [AjoutFormateurPage]
})
export class AjoutFormateurPageModule {}
