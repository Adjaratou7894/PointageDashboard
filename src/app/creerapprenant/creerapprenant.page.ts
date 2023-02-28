import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ImportationService } from '../services/importation.service';
  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor( private importationservice: ImportationService , private formB:FormBuilder) { }

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
      data=>{ console.log(data)
         this.msg = " Liste Apprenants importée avec succès."; this.formmodule.reset() } ) }
  }


