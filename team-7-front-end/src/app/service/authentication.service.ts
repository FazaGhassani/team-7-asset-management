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
    return this.http.get<Auth>(this.authenticationUrl, this.httpOptions).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          return userData;
        }
      )
    )
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
  }
}
