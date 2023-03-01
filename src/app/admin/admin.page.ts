import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  nombreapprenant:any
  nombreformateur:any
  nombreformation:any

  constructor( private adminService:AdminService ) { }

  ngOnInit() {
    this.adminService.getNombreAprrenant().subscribe(data=>{
      this.nombreapprenant=data.length
      
     
    })

    this.adminService.getNombreFormateur().subscribe(data=>{
      this.nombreformateur=data.length
      
     
    })

    this.adminService.getNombreFormation().subscribe(data=>{
      this.nombreformation=data.length
      
     
    })
  }



}
