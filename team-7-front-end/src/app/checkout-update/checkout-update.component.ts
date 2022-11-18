import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Checkout1, CheckoutModel } from "../model/checkout";
import { CheckoutService } from "../service/checkout.service";
import { AssetService } from "../service/asset.service";
import { WarehouseService } from "../service/warehouse.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Asset } from "../model/asset";
import { Warehouse } from "../model/warehouse";

@Component({
  selector: 'app-checkout-update',
  templateUrl: './checkout-update.component.html',
  styleUrls: ['./checkout-update.component.css']
})
export class CheckoutUpdateComponent implements OnInit {
  namePage: string = "Update Check-out Data";
  modelCheckout = new CheckoutModel(0, 0, 0, '', 0);
  assets: Asset[] = [];
  warehouses: Warehouse[] = [];
  checkout1s: Checkout1[] = [];
  submitted = false;
  idCheckout: any;

  constructor(private checkoutService: CheckoutService, private assetService: AssetService,
    private warehouseService: WarehouseService, private location: Location,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAssets();
    this.getWarehouses();
    this.idCheckout = this.route.snapshot.paramMap.get('id'); //cara parsing
    this.getCheckinById(this.idCheckout);
  }

  getCheckinById(id: string) {
    try {
      this.checkoutService.getCheckoutById(id).subscribe((res) => {
        //this.freelancer = res;
        this.modelCheckout.id = res.id;
        this.modelCheckout.asset_id = res.asset.id;
        this.modelCheckout.warehouse_id = res.warehouse.id;
        this.modelCheckout.jumlah = res.jumlah;
        this.modelCheckout.tanggal_keluar = res.tanggal_keluar;
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }


  updateCheckOut(
    id: number = this.modelCheckout.id,
    asset_id: number = this.modelCheckout.asset_id,
    warehouse_id: number = this.modelCheckout.warehouse_id,
    tanggal_keluar: string = this.modelCheckout.tanggal_keluar,
    jumlah: number = this.modelCheckout.jumlah
  ): void {
    this.checkoutService.editCheckout({ id, asset_id, warehouse_id, tanggal_keluar, jumlah })
      .subscribe(res => { this.checkout1s.push(res); this.redirectTo('/checkout') },
        err => { alert("ERROR! Mohon dicek kembali"); this.redirectTo('/checkout-update/' + id) });

  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  onSubmit() {
    this.submitted = true;
    this.updateCheckOut();
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

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  goBack(): void {
    this.location.back()
  }

}
