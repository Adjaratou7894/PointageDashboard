import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/liste.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.page.html',
  styleUrls: ['./liste-user.page.scss'],
})
export class ListeUserPage implements OnInit {
  listeuser:any

  constructor( private liste: ListeService) { }

  ngOnInit() {

    this.liste.getlisteglobale().subscribe(data=>{
      this.listeuser=data
      
     
    })
  }

}
