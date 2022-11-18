import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export class Auth {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticationUrl: string = 'http://localhost:8080/api/validateLogin'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:ianianian') })
  }
  authenticate(username: string, password: string): Observable<Auth> {
    const urlWithParam = `${this.authenticationUrl}/?username=${username}&password=${password}`
    return this.http.get<Auth>(urlWithParam, this.httpOptions)
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('username')
    return !(user === null)
  }
  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    localStorage.removeItem('role')
  }
}
