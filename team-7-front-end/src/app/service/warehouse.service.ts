import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../model/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouseUrl: string = 'http://localhost:8080/api/warehouses'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:ianianian') })
  }
  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.warehouseUrl)
  }
  addWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(this.warehouseUrl, warehouse, this.httpOptions)
  }
  deleteWarehouse(id: number): Observable<Warehouse> {
    const urlByID = `${this.warehouseUrl}/${id}`
    return this.http.delete<Warehouse>(urlByID, this.httpOptions)
  }
}
