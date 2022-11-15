import { Component, OnInit } from '@angular/core';
import {Checkout} from "../model/checkout";

@Component({
  selector: 'app-checkout-parent',
  templateUrl: './checkout-parent.component.html',
  styleUrls: ['./checkout-parent.component.css']
})
export class CheckoutParentComponent implements OnInit {
  namePage: string = "Check-Out Menu";
  checkouts : Checkout[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
