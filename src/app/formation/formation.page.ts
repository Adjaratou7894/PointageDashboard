import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../services/formation.service';
import { StorageService } from '../services/_services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})
export class FormationPage implements OnInit {
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
 

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  admin:any
  
// onFileChangeActivite($event: Event) {
// throw new Error('Method not implemented.');
// }

  constructor( private formationService:FormationService, private formB:FormBuilder, private activateRoute:ActivatedRoute,private storageService: StorageService, private toastr: ToastrService ) { }

  ngOnInit():void {
    this.admin= this.storageService.getUser()
    console.log(this.admin)
    this.id =this.activateRoute.snapshot.params["id"];
    this.formationService.getNombreFormateur().subscribe(data=>{
      this.formateur  = data;
      console.log(this.formateur,)
    })

    this.formationService.getNombreAdmin().subscribe(data=>{
      this.responsable  = data;
      console.log(this.responsable,)
    })
   
  }


  
  onSubmit(): void {
  
    // this.form.role=this.role

    
  
      this.formationService.creerformation(this.form,this.admin.id).subscribe({
        next: data => {
          
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;

          // this.toastr.success('La formation a été créée avec succès !');
          this.toastr.success('La formation a été créée avec succès !', 'Succès', {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true,
            positionClass: 'toast-top-right'
          });
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
      
    }

  
    // const role= new Set(['admin', 'formateur']);
    // const { email,nom,prenom,telephone,genre,  password,role } = this.form;

    
  }


