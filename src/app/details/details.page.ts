import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { ListeService } from '../services/liste.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  Back():void{
    window.history.back()
      }

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

}
