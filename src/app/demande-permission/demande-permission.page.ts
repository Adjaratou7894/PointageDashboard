import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.service';
import { PermissionService } from '../services/permission.service';
import { UserService } from '../services/_services/user.service';


@Component({
  selector: 'app-demande-permission',
  templateUrl: './demande-permission.page.html',
  styleUrls: ['./demande-permission.page.scss'],
})
export class DemandePermissionPage implements OnInit {
  demande:any;
  enumdemande:any;
  etatdemande:any;
 
  user:any;

  constructor(private permissionService:PermissionService,private listeService: ListeService) { }
 
page=1

  ngOnInit() {
    this.permissionService.getdemande().subscribe(data=>{
      this.demande=data
      
     
    })

    this.permissionService.getEnumDemande().subscribe(data=>{
      this.enumdemande=data
     
    })

     this.user = this.listeService.getlisteglobale();
 
  }

 // Méthode Changement d'état::::::::::::::::::::::::::::
 // Méthode changement sur le button
 ModifierEtat(demandeuser: any) {
  const statusformation = demandeuser.edemande;
  console.log('status ----- ' + demandeuser.edemande);
  // Changement Etat  Formation:::::::::::::::::
  this.permissionService
    .changerstatut(demandeuser.idpermission, statusformation)
    .subscribe((data) => {
      this.etatdemande = data;
    });

}
  
}
