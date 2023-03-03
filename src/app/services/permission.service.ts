import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  changerstatut(idpermission:number,permistatus:String): Observable<any> {
    console.log("statut"+permistatus);
    console.log("id"+ idpermission);
    
    if(permistatus === 'VALIDER') {
      return this.http.post(
        `http://localhost:8080/api/permission/ACCEPTER/${idpermission}`,permistatus,
        httpOptions
  
       
      );
    } else if(permistatus === 'ENCOURS') {
      return this.http.post(
        `http://localhost:8080/api/permission/ENCOURS_TRAITEMENT/${idpermission}`,permistatus,
        httpOptions
  
       
      );
    } else {
      return this.http.post(
        `http://localhost:8080/api/permission/NON_ACCEPTER/${idpermission}`,permistatus,
        httpOptions
  
       
      );
    }
  }



  getdemande():Observable<any>{
    return this.http.get("http://localhost:8080/api/permission/list");
  
  }
  getEnumDemande():Observable<any>{
    return this.http.get("http://localhost:8080/api/permission/enumValues");
  }




 
}
