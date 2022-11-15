import {Component, Input, OnInit} from '@angular/core';
import {Checkout} from "../model/checkout";

@Component({
  selector: 'app-checkout-child',
  templateUrl: './checkout-child.component.html',
  styleUrls: ['./checkout-child.component.css']
})
export class CheckoutChildComponent implements OnInit {
  @Input() checkoutInList!: Checkout[]
  constructor() { }

  ngOnInit(): void {
  }

}
