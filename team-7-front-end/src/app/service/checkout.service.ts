import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Checkout, Checkout1} from "../model/checkout";
import {Checkin} from "../model/checkin";


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutURL: string = 'http://localhost:8080/api/checkouts/'
  constructor(private http: HttpClient) { }
  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  token = this.username + ":" + this.password
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Basic ' + btoa(this.token) })
  }

  getCheckout(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>(this.checkoutURL)
  }

  getCheckoutById(id : string):Observable<Checkout> {
    return this.http.get<Checkout>(this.checkoutURL+id, this.httpOptions);
  }

  addChekout(checkout1: Checkout1): Observable<Checkout1> {
    return this.http.post<Checkout1>(this.checkoutURL, checkout1, this.httpOptions)
  }

  editCheckout(checkout1:Checkout1):Observable<Checkout1>{
    return this.http.put<Checkout1>(this.checkoutURL+checkout1.id, checkout1, this.httpOptions);
  }

  deleteCheckout(id : number): Observable<Checkout>{
    return this.http.delete<Checkout>(this.checkoutURL+id,  this.httpOptions);
  }

}
