export interface Report {
    asset_id: number,
    asset: string,
    warehouse_id: number,
    warehouse: string,
    jumlah_checkin: number,
    jumlah_checkout: number
}

export interface ReportDetail {
    type: string,
    asset_id: number,
    asset: string,
    warehouse_id: number,
    warehouse: string,
    tanggal: string,
    jumlah: number
}

export class ReportModel {
    constructor(
        public asset_id: number,
        public asset: string,
        public warehouse_id: number,
        public warehouse: string,
        public jumlah_checkin: number,
        public jumlah_checkout: number
    ) { }
}