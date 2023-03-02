import { Component, OnInit } from '@angular/core';
import { PointageService } from '../services/pointage.service';

@Component({
  selector: 'app-liste-pointage',
  templateUrl: './liste-pointage.page.html',
  styleUrls: ['./liste-pointage.page.scss'],
})
export class ListePointagePage implements OnInit {
  infopointage:any

  constructor(private pointageService:PointageService) { }

  ngOnInit() {

    this.pointageService.getlistepointage().subscribe(data=>{
      this.infopointage  = data;
      console.log(this.infopointage,)
    })
    this.pointageService.getAprrenant().subscribe(data=>{
      this.infopointage  = data;
      console.log(this.infopointage,)
    })
  }

}
