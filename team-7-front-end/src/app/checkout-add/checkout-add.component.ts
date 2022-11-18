import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {CheckoutService} from "../service/checkout.service";
import {Checkout1, CheckoutModel} from "../model/checkout";
import {Router} from "@angular/router";
import {Asset} from "../model/asset";
import {Warehouse} from "../model/warehouse";
import {AssetService} from "../service/asset.service";
import {WarehouseService} from "../service/warehouse.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-checkout-add',
  templateUrl: './checkout-add.component.html',
  styleUrls: ['./checkout-add.component.css']
})
export class CheckoutAddComponent implements OnInit {
  namePage: string = "Add New Check-out Data";
  modelCheckout = new CheckoutModel(0, 0, 0,'',0);
  assets: Asset[] = [];
  warehouses : Warehouse[] = [];
  checkout1s: Checkout1[] = [];
  submitted = false;
  error : any;
  constructor(private checkoutService: CheckoutService, private assetService : AssetService,
              private warehouseService : WarehouseService, private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getAssets();
    this.getWarehouses();
  }

  onSubmit() {
    this.submitted = true;
    this.addCheckout();
  }

  addCheckout(
    id: number = this.modelCheckout.id,
    asset_id: number = this.modelCheckout.asset_id,
    warehouse_id: number = this.modelCheckout.warehouse_id,
    tanggal_keluar : string= this.modelCheckout.tanggal_keluar,
    jumlah : number = this.modelCheckout.jumlah
  ): void {
    this.checkoutService.addChekout({id, asset_id, warehouse_id, tanggal_keluar, jumlah})
      .subscribe(
        res => {
          this.checkout1s.push(res);
          //redirect
          this.redirectTo('/checkout');
        },
        error => {
            if(error instanceof HttpErrorResponse){
              alert("ERROR! PASTIKAN DATA CHECKIN PADA ASSET DAN WAREHOUSE ADA!");
              this.redirectTo('/checkout-add');
            }
         }
      );
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  getAssets(): void {
    this.assetService.getAssets()
      .subscribe(asst => {
        this.assets = asst;
      })
  }

  getWarehouses(): void {
    this.warehouseService.getWarehouses()
      .subscribe(wrh => {
        this.warehouses = wrh;
      })
  }

  validateNo(e: any): boolean{
    const charCode = e.which ? e.which: e.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false
    }
    return true
  }

  goBack(): void {
    this.location.back()
  }
}
