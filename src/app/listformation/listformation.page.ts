import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { ListeService } from '../services/liste.service';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.page.html',
  styleUrls: ['./listformation.page.scss'],
})
export class ListformationPage implements OnInit {
  nomformation:any;
  enumformation:any;
  etatformation:any;
 
  user:any;
  constructor( private formationService:FormationService,private listeService: ListeService) { }
  page=1

  ngOnInit() {

    this.formationService.getinfoformation().subscribe(data=>{
      this.nomformation=data
      
     
    })

    this.formationService.getEnumformation().subscribe(data=>{
      this.enumformation=data
     
    })
    this.user = this.listeService.getlisteglobale();

  }

  ModifierEtat(formationodc: any) {
    const statusformation = formationodc.Eformation;
    console.log('status ----- ' + formationodc.Eformation);
    // Changement Etat  Formation:::::::::::::::::
    this.formationService
      .changerstatut(formationodc.idFormation, statusformation)
      .subscribe((data) => {
        this.etatformation = data;
      });
  
  }

}
