import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Warehouse, WarehouseModel } from '../model/warehouse';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.css']
})
export class WarehouseAddComponent implements OnInit {
  namePage: string = "Form Add new Warehouse"
  warehouse: Warehouse[] = []
  modelWarehouse = new WarehouseModel(0, '')
  submitted = false
  constructor(private warehouseService: WarehouseService, private location: Location) { }

  ngOnInit(): void {
    this.warehouse = []
  }
  onSubmit() {
    this.submitted = true;
    this.addWarehouse();
  }
  addWarehouse(
    id: number = this.modelWarehouse.id,
    name: string = this.modelWarehouse.name
  ): void {
    name = name.trim()
    if (!name) { return }
    this.warehouseService.addWarehouse({ id, name } as Warehouse).subscribe(wrh => { this.warehouse.push(wrh) })
    this.warehouse = []
  }
  goBack(): void {
    this.location.back()
  }

}
