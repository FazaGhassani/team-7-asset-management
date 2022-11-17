import {Component, Input, OnInit} from '@angular/core';
import {Checkout} from "../model/checkout";
import {Router} from "@angular/router";
import {CheckoutService} from "../service/checkout.service";

@Component({
  selector: 'app-checkout-child',
  templateUrl: './checkout-child.component.html',
  styleUrls: ['./checkout-child.component.css']
})
export class CheckoutChildComponent implements OnInit {
  @Input() checkoutInList!: Checkout[];
  constructor(private checkoutService : CheckoutService, private router: Router) { }

  ngOnInit(): void {
  }

  update(id:number){
    this.router.navigateByUrl('/checkout-update/:id', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/checkout-update',id]);
    });
  }

  deleteCheckout(id: number):void{
    if(confirm("Are you sure you want to delete this data ?")){
      this.checkoutService.deleteCheckout(id)
        .subscribe(res =>{
            this.checkoutInList.forEach((checkin,index)=>{
              if(checkin.id==id) this.checkoutInList.splice(index, 1);
            });
          }
        )
    }
  }

}
