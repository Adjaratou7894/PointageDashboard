import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ImportationService } from '../services/importation.service';
  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creerapprenant',
  templateUrl: './creerapprenant.page.html',
  styleUrls: ['./creerapprenant.page.scss'],
})
export class CreerapprenantPage implements OnInit {
  formmodule!:FormGroup;
  file:any;
  fichier:any;
  liste: any;
  msg: string="";
  lists: any;
  message:string="";
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  loadinctrl: any;

  constructor( private importationservice: ImportationService , private formB:FormBuilder) { }

  async showLoading() {
    const loading = await this.loadinctrl.create({
      message: 'En cours...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  ngOnInit():void {

    this.formmodule=this.formB.group({
      libelleliste:['', Validators.required],
      file:['', Validators.required],
    })
  }

  
 fileChange(e:any){
  this.fichier=e.target["files"][0]
  //console.log(e.target['files'][0].name+" "+ e.target['files'][0].length)
}


 

   
    importerliste(){this.liste=this.formmodule.value
       this.importationservice.importliste(this.liste.libelleliste, this.fichier).subscribe( 
      data=>{ 
        
        if(data.status == true){

          Swal.fire({
            heightAuto:false,
            icon:'success',
            text:data.contenu,
            timer:3000
          })
        }
        else{
          Swal.fire({
            heightAuto:false,
            icon:'warning',
            text:"Desolé, une erreur s'est produite",
            timer:3000
          })
        }
        
         //this.msg = " Liste Apprenants importée avec succès."; 
         this.formmodule.reset() 
        
        
        } ) }
  }


