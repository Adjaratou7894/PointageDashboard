import { Component, OnInit } from '@angular/core';
import { info } from 'console';
import { AdminService } from '../services/admin.service';
import { StorageService } from '../services/_services/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  nombreapprenant:any
  nombreformateur:any
  nombreformation:any
  nombrepermission:any
  nombrepointage:any
  nomadmin:any
  prenomadmin:any
  today: string
  info:any


  constructor( private adminService:AdminService,private storageService: StorageService ) { this.today = new Date().toLocaleDateString(); }

  

  ngOnInit() {
    this.nomadmin= this.storageService.getUser()
    console.log(this.nomadmin)
    

    this.adminService.getinfoAdmin().subscribe(data=>{
      this.info = data;
      console.log(this.info,)
    })
    this.adminService.getNombreAprrenant().subscribe(data=>{
      this.nombreapprenant=data.length
      
     
    })

    this.adminService.getNombreFormateur().subscribe(data=>{
      this.nombreformateur=data.length
      
     
    })

    this.adminService.getNombreFormation().subscribe(data=>{
      this.nombreformation=data.length
      
     
    })
    this.adminService.getNombrePermission().subscribe(data=>{
      this.nombrepermission=data.length
      
     
    })

    this.adminService.getNombrepresence().subscribe(data=>{
      this.nombrepointage=data.length
      
     
    })
  }



}
