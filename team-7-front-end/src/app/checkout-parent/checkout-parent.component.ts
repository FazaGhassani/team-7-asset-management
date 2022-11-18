import { Component, OnInit } from '@angular/core';
import { Checkout } from "../model/checkout";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CheckoutService } from "../service/checkout.service";

@Component({
  selector: 'app-checkout-parent',
  templateUrl: './checkout-parent.component.html',
  styleUrls: ['./checkout-parent.component.css']
})
export class CheckoutParentComponent implements OnInit {
  namePage: string = "Check-Out Menu";
  checkouts: Checkout[] = [];
  constructor(private checkoutService: CheckoutService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.checkouts = [];
    this.getCheckOuts();
  }

  getCheckOuts(): void {
    this.checkoutService.getCheckout()
      .subscribe(res => {
        this.checkouts = res;
      });
  }
}
