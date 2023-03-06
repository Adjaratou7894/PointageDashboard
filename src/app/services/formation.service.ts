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

  // creerformation(formation:any , id:number): Observable<any> {
  //   return this.http.post(
  //     `http://localhost:8080/api/formation/creer/${id}`,formation,
     
  //     httpOptions
  //   );
  // }
  creerformation(formation:any , id:number, idliste:number): Observable<any> {
    return this.http.post(
      `http://localhost:8080/api/formation/creer/${id}/${idliste}`,formation,
     
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

  getinfoformation():Observable<any>{
    return this.http.get("http://localhost:8080/api/formation/list");
  }

  getlisteformation():Observable<any>{
    return this.http.get("http://localhost:8080/api/formation/listeapprenant");
  }



  changerstatut(idFormation:number,formationstatus:String): Observable<any> {
    console.log("statut"+formationstatus);
    console.log("id"+idFormation);
    
    if(formationstatus === 'INITIER') {
      return this.http.post(
        `http://localhost:8080/api/formation/ACCEPTER/${idFormation}`,formationstatus,
        httpOptions
  
       
      );
    } else if(formationstatus=== 'ENCOURS') {
      return this.http.post(
        `http://localhost:8080/api/formation/ENCOURS_TRAITEMENT/${idFormation}`,formationstatus,
        httpOptions
  
       
      );
    } else {
      return this.http.post(
        `http://localhost:8080/api/permission/NON_ACCEPTER/${idFormation}`,formationstatus,
        httpOptions
  
       
      );
    }
  }



  
  getEnumformation():Observable<any>{
    return this.http.get("http://localhost:8080/api/formation/enumValues");
  }


 
}
