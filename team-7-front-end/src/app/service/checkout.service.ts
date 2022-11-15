import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Checkout} from "../model/checkout";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutURL: string = 'http://localhost:8080/api/checkouts/'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa('admin:ianianian') })
  }

  getCheckout(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.checkoutURL)
  }

  addChekout(checkout: Checkout): Observable<Checkout> {
    return this.http.post<Checkout>(this.checkoutURL, checkout, this.httpOptions)
  }
}
