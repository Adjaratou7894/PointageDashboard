import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerformationPageRoutingModule } from './creerformation-routing.module';

import { CreerformationPage } from './creerformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerformationPageRoutingModule
  ],
  declarations: [CreerformationPage]
})
export class CreerformationPageModule {}
