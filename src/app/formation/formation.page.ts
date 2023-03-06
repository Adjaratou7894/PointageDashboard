import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl,NG_VALIDATORS, Validator,  } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../services/formation.service';
import { StorageService } from '../services/_services/storage.service';
// import { ToastrService } from 'ngx-toastr';
import { ToastController } from '@ionic/angular';
import { ImportationService } from '../services/importation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})




export class FormationPage implements OnInit {

  Back():void{
window.history.back()
  }
  form: any = {
    intituleformation: null,
    dateDebutForm:null,
    datetFinForm: null,
    heureDebutForm: null,
    heureFinForm: null,
    description:null
    
  };
  id:any;
  formateur:any;
  responsable:any;
  idliste:any
 

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  admin:any;
  libelleliste:any
  liste:any
  
// onFileChangeActivite($event: Event) {
// throw new Error('Method not implemented.');
// }

  constructor( private formationService:FormationService, private formB:FormBuilder, private activateRoute:ActivatedRoute,private storageService: StorageService, private toastController: ToastController,  ) { }

  ngOnInit():void {
    this.admin= this.storageService.getUser()
    console.log(this.admin)
   this.formationService.getlisteformation().subscribe(data=>{
    this.liste = data
   })
    
    // this.libelleliste= this.formationService.getlisteformation()
    // console.log(this.libelleliste)
 
    this.id =this.activateRoute.snapshot.params["id"];
    this.idliste =this.activateRoute.snapshot.params["idliste"];
    this.formationService.getNombreFormateur().subscribe(data=>{
      this.formateur  = data;
      console.log(this.formateur,)
    })

    this.formationService.getNombreAdmin().subscribe(data=>{
      this.responsable  = data;
      console.log(this.responsable,)
    })
   
  
  }

  // async presentToast(position: 'top' | 'middle' | 'bottom') {
  //   const toast = await this.toastController.create({
  //     message: 'La formation a été créée avec succès !',
  //     duration: 1500,
  //     position: position
  //   });

  //   await toast.present();
  // }


  
  onSubmit(): void {
  
    // this.form.role=this.role

    // const startDate = new Date(this.datedebutFormValue);
    // const endDate = new Date(this.endFormValue);
    // const startTime = new Date(this.startTimeValue);
    // const endTime = new Date(this.endTimeValue);
  
    // if (endDate <= startDate) {
    //   // afficher un message d'erreur à l'utilisateur
    //   return;
    // }
  
    // if (endTime <= startTime) {
    //   // afficher un message d'erreur à l'utilisateur
    //   return;
    // }

    
  alert("la liste"+ this.form.liste);
  
  
      this.formationService.creerformation(this.form,this.admin.id, this.form.liste).subscribe({
        next: data => {
          
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          // this.form.reset();
          // this.reloadPage();
          window.location.reload();
                 alert("vvv"+ JSON.stringify(data))

          // this.toastr.success('La formation a été créée avec succès !');
          // this.toastr.success('La formation a été créée avec succès !', 'Succès', {
          //   // timeOut: 3000,
          //   progressBar: true,
          //   progressAnimation: 'increasing',
          //   closeButton: true,
          //   positionClass: 'toast-center'
          // });
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
        });
      
    }
    // reloadPage(): void {
    //   window.location.reload();
    // }

  
    // const role= new Set(['admin', 'formateur']);
    // const { email,nom,prenom,telephone,genre,  password,role } = this.form;

    
  }


