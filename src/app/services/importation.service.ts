import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// const api = 'http://localhost:8080/api/User/ajoute_apprenant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImportationService {

  constructor(private http: HttpClient) { }
  api ="http://localhost:8080/api/User/ajoute_apprenant"
  importliste(libelleliste:String, file:any):Observable<any>{
    let data= new FormData();
    data.append("file",file)
    return this.http.post(`${this.api}/${libelleliste}`,data,{responseType:"text"});

 
  }
  // getlisteformation():Observable<any>{
  //   return this.http.get("http://localhost:8080/api/formation/listeapprenant");
  // }

}
