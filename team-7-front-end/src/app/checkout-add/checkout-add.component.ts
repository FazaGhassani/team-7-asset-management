import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {CheckoutService} from "../service/checkout.service";

@Component({
  selector: 'app-checkout-add',
  templateUrl: './checkout-add.component.html',
  styleUrls: ['./checkout-add.component.css']
})
export class CheckoutAddComponent implements OnInit {
  namePage: string = "Add New Check-out Data"
  constructor(private checkoutService: CheckoutService, private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back()
  }
}
