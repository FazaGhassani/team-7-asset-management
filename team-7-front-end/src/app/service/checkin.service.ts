import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Checkin, Checkin1 } from "../model/checkin";

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  private checkinURL: string = 'http://localhost:8080/api/checkins/'
  constructor(private http: HttpClient) { }
  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  token = this.username + ":" + this.password
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa(this.token) })
  }

  getCheckins(): Observable<Checkin[]> {
    return this.http.get<Checkin[]>(this.checkinURL)
  }

  getCheckinsByAssetIdandWarehouseId(asset_id: number, warehouse_id: number): Observable<Checkin> {
    return this.http.get<Checkin>(this.checkinURL + 'asset/' + asset_id + '/warehouse/' + warehouse_id);
  }

  addChekin(checkin1: Checkin1): Observable<Checkin1> {
    return this.http.post<Checkin1>(this.checkinURL, checkin1, this.httpOptions)
  }

  editCheckin(checkin1: Checkin1): Observable<Checkin1> {
    return this.http.put<Checkin1>(this.checkinURL + checkin1.id, checkin1, this.httpOptions);
  }

  deleteCheckin(id: number): Observable<Checkin> {
    return this.http.delete<Checkin>(this.checkinURL + id, this.httpOptions);
  }
}
