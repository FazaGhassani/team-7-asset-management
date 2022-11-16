import {Asset} from "./asset";
import {Warehouse} from "./warehouse";

export interface Checkin {
  id: number,
  asset: Asset,
  warehouse: Warehouse,
  tanggal_masuk: string,
  jumlah : number
}

export interface Checkin1 {
  id: number,
  asset_id: number,
  warehouse_id: number,
  tanggal_masuk: string,
  jumlah : number
}

export class CheckinModel {
  constructor(
    public id: number,
    public asset_id: number,
    public warehouse_id: number,
    public tanggal_masuk : string,
    public jumlah : number
  ) { }
}
