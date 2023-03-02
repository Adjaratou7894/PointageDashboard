import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  constructor(private http: HttpClient) { }


  getlisteglobale():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/list");
  
  }

 

}