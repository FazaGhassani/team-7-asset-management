export interface Warehouse {
    id: number,
    name: string
}
export class WarehouseModel {
    constructor(
        public id: number,
        public name: string
    ) { }
}
