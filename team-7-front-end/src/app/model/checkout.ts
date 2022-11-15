import {Asset} from "./asset";
import {Warehouse} from "./warehouse";

export interface Checkout {
  id: number,
  asset: Asset,
  warehouse: Warehouse,
  tanggal_keluar: string,
  jumlah : number
}

export class CheckoutModel {
  constructor(
    public name: string,
    public asset_id: number,
    public warehouse_id: number,
    public tangal_keluar : string,
    public jumlah : number
  ) { }
}
