import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { CheckinService } from "../service/checkin.service";
import { Asset, AssetModel } from "../model/asset";
import { Checkin, Checkin1, CheckinModel } from "../model/checkin";
import { Warehouse } from "../model/warehouse";
import { AssetService } from '../service/asset.service';
import { WarehouseService } from "../service/warehouse.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-checkin-add',
  templateUrl: './checkin-add.component.html',
  styleUrls: ['./checkin-add.component.css']
})
export class CheckinAddComponent implements OnInit {
  namePage: string = "Add/Update Check-In Data"
  checkin1s: Checkin1[] = [];
  assets: Asset[] = [];
  warehouses: Warehouse[] = [];
  checkin: Checkin | undefined;
  modelCheckin = new CheckinModel(0, 0, 0, '', 0);
  submitted = false;
  isDataFound = false;

  constructor(private checkinService: CheckinService, private assetService: AssetService,
    private warehouseService: WarehouseService, private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.getAssets();
    this.getWarehouses();
  }

  onSubmit() {
    this.submitted = true;
    this.addCheckin();
  }

  addCheckin(
    id: number = this.modelCheckin.id,
    asset_id: number = this.modelCheckin.asset_id,
    warehouse_id: number = this.modelCheckin.warehouse_id,
    tanggal_masuk: string = this.modelCheckin.tanggal_masuk,
    jumlah: number = this.modelCheckin.jumlah
  ): void {
    if (this.checkin == null) {
      this.checkinService.addChekin({ id, asset_id, warehouse_id, tanggal_masuk, jumlah })
        .subscribe(res => { this.checkin1s.push(res); this.redirectTo('/checkin'); },
          err => { alert("ERROR! Mohon dicek kembali"); this.redirectTo('/checkin-add') }
        );
    } else {
      id = this.checkin.id;
      this.checkinService.editCheckin({ id, asset_id, warehouse_id, tanggal_masuk, jumlah })
        .subscribe(res => { this.redirectTo('/checkin'); },
          err => { alert("ERROR! Mohon dicek kembali"); this.redirectTo('/checkin-add') }
        );
    }
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
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

  validateNo(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  showJumlah() {
    this.isDataFound = true;
  }

  hideJumlah() {
    this.isDataFound = false;
  };

  showContent(asset_id: number, warehouse_id: number) {
    this.checkinService.getCheckinsByAssetIdandWarehouseId(asset_id, warehouse_id)
      .subscribe(res => {
        if (res != null) {
          this.modelCheckin.jumlah = res.jumlah;
          this.checkin = res;
        } else {
          this.modelCheckin.jumlah = 0;
        }
        this.showJumlah();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
