import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {CheckinService} from "../service/checkin.service";
import {Asset, AssetModel} from "../model/asset";
import {Checkin, Checkin1, CheckinModel} from "../model/checkin";

@Component({
  selector: 'app-checkin-add',
  templateUrl: './checkin-add.component.html',
  styleUrls: ['./checkin-add.component.css']
})
export class CheckinAddComponent implements OnInit {
  namePage: string = "Add New Check-in Data"
  checkin1s: Checkin1[] = []
  modelCheckin = new CheckinModel(0, 0, 0,'',0)
  submitted = false;
  constructor(private checkinService: CheckinService, private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.addCheckin();
  }

  addCheckin(
    id: number = this.modelCheckin.id,
    asset_id: number = this.modelCheckin.asset_id,
    warehouse_id: number = this.modelCheckin.warehouse_id,
    tanggal_masuk : string= this.modelCheckin.tanggal_masuk,
    jumlah : number = this.modelCheckin.jumlah
  ): void {
    //name = name.trim()
    //if (!name || !description || !barcode) { return }
    this.checkinService.addChekin({ id, asset_id, warehouse_id, tanggal_masuk, jumlah })
      .subscribe(res => { this.checkin1s.push(res) })
    this.checkin1s = []
  }

  goBack(): void {
    this.location.back()
  }

}
