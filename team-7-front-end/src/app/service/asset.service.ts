import { Injectable } from '@angular/core';
import { Asset } from '../model/asset';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private assetUrl: string = 'http://localhost:8080/api/assets/'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:$2a$12$z7Bwr705Y6v9XWScJEtgFudDHW5pe.UdRcJFp0IdQMyk1LJl7kw2u') })
  }
  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetUrl)
  }
}
