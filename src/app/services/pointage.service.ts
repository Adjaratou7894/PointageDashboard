import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PointageService {

  constructor(private http: HttpClient) { }

  getlistepointage():Observable<any>{         
    return this.http.get("http://localhost:8080/api/pointage/listPointage");
    httpOptions
  }

  getlisteglobale():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/list");
  
  }
  // getAprrenant():Observable<any>{
  //   return this.http.get("http://localhost:8080/api/User/listapprenant");
  
  // }

  


 



 
}
