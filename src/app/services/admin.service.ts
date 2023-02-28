import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getNombreAprrenant():Observable<object>{
    return this.http.get(" http://localhost:8080/api/User/listapprenant");
  }
}
