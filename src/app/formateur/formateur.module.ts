import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormateurPageRoutingModule } from './formateur-routing.module';

import { FormateurPage } from './formateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormateurPageRoutingModule
  ],
  declarations: [FormateurPage]
})
export class FormateurPageModule {}
