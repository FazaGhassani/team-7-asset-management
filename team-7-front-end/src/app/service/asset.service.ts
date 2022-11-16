import { Injectable } from '@angular/core';
import { Asset } from '../model/asset';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private assetUrl: string = 'http://localhost:8080/api/assets'
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:ianianian') })
  }
  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetUrl)
  }
  addAsset(asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.assetUrl, asset, this.httpOptions)
  }
  deleteAsset(id: number): Observable<Asset> {
    const urlByID = `${this.assetUrl}/${id}`
    return this.http.delete<Asset>(urlByID, this.httpOptions)
  }
}
