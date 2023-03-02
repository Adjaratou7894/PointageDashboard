import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  getNombreAprrenant():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/listapprenant");
  
  }

  getNombreFormateur():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/listFormateur");
  }

  getNombreFormation():Observable<any>{
    return this.http.get("http://localhost:8080/api/formation/list");
  }

  getNomPrenom():Observable<any>{
    return this.http.get(" http://localhost:8080/api/User/listformation");
  }
  getNombrepresence():Observable<any>{         
    return this.http.get(" http://localhost:8080/api/pointage/listPointage");
  }

  getNombrePermission():Observable<any>{         
    return this.http.get("http://localhost:8080/api/permission/list");
  }
  getinfoAdmin():Observable<any>{
    return this.http.get("http://localhost:8080/api/User/listadmin");
  }
}
