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
  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  token = this.username + ":" + this.password
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa(this.token) })
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
  editAsset(asset: Asset): Observable<Asset> {
    return this.http.put<Asset>(this.assetUrl + '/' + asset.id, asset, this.httpOptions);
  }
  getAssetById(id: string): Observable<Asset> {
    return this.http.get<Asset>(this.assetUrl + '/' + id, this.httpOptions);
  }
}
