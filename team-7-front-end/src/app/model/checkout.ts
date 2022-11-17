import {Asset} from "./asset";
import {Warehouse} from "./warehouse";

export interface Checkout {
  id: number,
  asset: Asset,
  warehouse: Warehouse,
  tanggal_keluar: string,
  jumlah : number
}

export interface Checkout1 {
  id: number,
  asset_id: number,
  warehouse_id: number,
  tanggal_keluar: string,
  jumlah : number
}

export class CheckoutModel {
  constructor(
    public id: number,
    public asset_id: number,
    public warehouse_id: number,
    public tanggal_keluar : string,
    public jumlah : number
  ) { }
}
