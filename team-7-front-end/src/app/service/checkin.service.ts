import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Checkin} from "../model/checkin";

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  private checkinURL: string = 'http://localhost:8080/api/checkins/'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:ianianian') })
  }

  getCheckins(): Observable<Checkin[]> {
    return this.http.get<Checkin[]>(this.checkinURL)
  }

  addChekin(checkin: Checkin): Observable<Checkin> {
    return this.http.post<Checkin>(this.checkinURL, checkin, this.httpOptions)
  }
}
