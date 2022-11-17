import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report, ReportDetail } from '../model/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportUrl: string = 'http://localhost:8080/api/reports/'
  constructor(private http: HttpClient) { }
  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  token = this.username + ":" + this.password
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa(this.token) })
  }
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.reportUrl)
  }
  // getReportDetail(asset_id: number, warehouse_id: number): Observable<ReportDetail> {
  //   return this.http.post<ReportDetail>(this.reportUrl + 'detail', { asset_id, warehouse_id }, this.httpOptions)
  // }
  getReportDetail(asset_id: number, warehouse_id: number): Observable<ReportDetail[]> {
    const urlWithParam = `${this.reportUrl}detail/?asset_id=${asset_id}&warehouse_id=${warehouse_id}`
    return this.http.get<ReportDetail[]>(urlWithParam, this.httpOptions)
  }

}
