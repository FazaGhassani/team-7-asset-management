import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-warehouse-child',
  templateUrl: './warehouse-child.component.html',
  styleUrls: ['./warehouse-child.component.css']
})
export class WarehouseChildComponent implements OnInit {
  @Input() warehouseChild!: Warehouse[]
  constructor(private warehouseService: WarehouseService) { }
  deleteWarehouse(id: number): void {
    let index = this.warehouseChild.findIndex(d => d.id === id)
    this.warehouseService.deleteWarehouse(id).subscribe(a => this.warehouseChild.splice(index, 1))
  }
  ngOnInit(): void {
  }

}
