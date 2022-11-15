import {Asset} from "./asset";
import {Warehouse} from "./warehouse";

export interface Checkin {
  id: number,
  asset: Asset,
  warehouse: Warehouse,
  tanggal_masuk: string,
  jumlah : number
}

export class CheckinModel {
  constructor(
    public name: string,
    public asset_id: number,
    public warehouse_id: number,
    public tanggal_masuk : string,
    public jumlah : number
  ) { }
}
