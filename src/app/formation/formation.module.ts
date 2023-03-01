import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationPageRoutingModule } from './formation-routing.module';

import { FormationPage } from './formation.page';
import { ToastrModule } from 'ngx-toastr'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationPageRoutingModule,
    ToastrModule.forRoot() ,
    BrowserAnimationsModule,

  
    
  ],
  declarations: [FormationPage]
})
export class FormationPageModule {}
