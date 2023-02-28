import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuPageRoutingModule,
    RouterModule,
    IonicModule.forRoot(),
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
