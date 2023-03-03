import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { ListeService } from '../services/liste.service';
import { PointageService } from '../services/pointage.service';

@Component({
  selector: 'app-liste-pointage',
  templateUrl: './liste-pointage.page.html',
  styleUrls: ['./liste-pointage.page.scss'],
})
export class ListePointagePage implements OnInit {
  infopointage:any
  user:any
  nomformation:any
  constructor(private pointageService:PointageService ,private listeService: ListeService,private formationService:FormationService ) { }
  page=1

  ngOnInit() {

    this.pointageService.getlistepointage().subscribe(data=>{
      this.infopointage  = data;
      console.log(this.infopointage,)
    })
  

    //this. user = this.listeService.getlisteglobale();
    this.nomformation = this.formationService.getnomformation();

    
    
    this.user = this.listeService.getlisteglobale();
  }

}
