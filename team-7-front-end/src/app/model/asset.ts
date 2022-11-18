export interface Asset {
    id: number,
    name: string,
    description: string,
    barcode: string,
}

export class AssetModel {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public barcode: string
    ) { }
}
