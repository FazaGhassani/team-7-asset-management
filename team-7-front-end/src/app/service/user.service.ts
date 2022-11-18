import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = 'http://localhost:8080/api/users'
  constructor(private http: HttpClient) { }
  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  token = this.username + ":" + this.password
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa(this.token) })
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions)
  }
  deleteUser(id: number): Observable<User> {
    const urlByID = `${this.userUrl}/${id}`
    return this.http.delete<User>(urlByID, this.httpOptions)
  }
  editUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + '/' + user.id, user, this.httpOptions);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id, this.httpOptions);
  }
}
