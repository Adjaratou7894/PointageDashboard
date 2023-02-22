import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePointagePageRoutingModule } from './liste-pointage-routing.module';

import { ListePointagePage } from './liste-pointage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePointagePageRoutingModule
  ],
  declarations: [ListePointagePage]
})
export class ListePointagePageModule {}
