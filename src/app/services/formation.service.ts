import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  creerformation(formation:any , id:number): Observable<any> {
    return this.http.post(
      `http://localhost:8080/api/formation/creer/${id}`,formation,
     
      httpOptions
    );
  }

  getNombreFormateur():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/listFormateur");
  }

  getNombreAdmin():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/listadmin");
  }

  getnomformation():Observable<any>{
    return this.http.get("http://localhost:8080/api/formation/list");
  }
}
