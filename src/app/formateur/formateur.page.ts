import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/_services/auth.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.page.html',
  styleUrls: ['./formateur.page.scss'],
})
export class FormateurPage implements OnInit {

  form: any = {
    username: null,
    email: null,
    nom:null,
    prenom:null,
    telephone:null,
    genre:null,
    role:null,
    password: null
  };
   role:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  genre:any=[];
  


  constructor(private authService: AuthService) {
    this.genre=[
      { genre:'Masculin'},
      {genre:'Feminin'},
    ];

    
   }

  ngOnInit(): void {
    this.authService.getNomRoles().subscribe(data=>{
      this.role = data;
      console.log(this.role)
    })
  }

  onSubmit(): void {
  
    // this.form.role=this.role

    
    this.authService.getRoles(this.form.role).subscribe((data:any) =>{
      console.log("role " , data );
      this.form.role= [data.name] 
      console.log("form " , this.form)
      this.authService.register( this.form).subscribe({
        next: data => {
          
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
      
    })

  
    // const role= new Set(['admin', 'formateur']);
    // const { email,nom,prenom,telephone,genre,  password,role } = this.form;

    
  }



}
