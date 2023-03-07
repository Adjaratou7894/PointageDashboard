import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.service';
import { AuthService } from '../services/_services/auth.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
  
})
export class ListeUserPage implements OnInit {
  listeuser:any
  page = 1;
  role:any
  mesrole: any;

  constructor( private liste: ListeService, private authService:AuthService) { }

  ngOnInit() {

    this.liste.getlisteglobale().subscribe(data=>{
      this.listeuser=data
    
    })
    this.authService.getNomRoles().subscribe(data=>{
      this.role = data;
      // console.log(this.role)
    })

    this.mesrole = this.authService.getNomRoles();

  }

}
