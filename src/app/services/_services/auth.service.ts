
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'connexionAdmin',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(user:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'inscription',
     user,
      httpOptions
    );
  }

  getRoles(name:any):Observable<object>{
    return this.http.get("http://localhost:8080/api/User/getRoleByName/" + name);
  }
  getNomRoles():Observable<object>{
    return this.http.get("http://localhost:8080/api/User/listerole");
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'deconnexion', { }, httpOptions);
  }
}