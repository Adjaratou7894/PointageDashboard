import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandePermissionPageRoutingModule } from './demande-permission-routing.module';

import { DemandePermissionPage } from './demande-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandePermissionPageRoutingModule
  ],
  declarations: [DemandePermissionPage]
})
export class DemandePermissionPageModule {}
