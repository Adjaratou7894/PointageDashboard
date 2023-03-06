import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxPaginationModule} from 'ngx-pagination';

import { ListformationPageRoutingModule } from './listformation-routing.module';

import { ListformationPage } from './listformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListformationPageRoutingModule,
    NgxPaginationModule

  ],
  declarations: [ListformationPage]
})
export class ListformationPageModule {}
