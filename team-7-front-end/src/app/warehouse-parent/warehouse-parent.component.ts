import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-warehouse-parent',
  templateUrl: './warehouse-parent.component.html',
  styleUrls: ['./warehouse-parent.component.css']
})
export class WarehouseParentComponent implements OnInit {
  namePage: string = "Warehouse Menu"
  warehouse: Warehouse[] = []
  constructor(private warehouseService: WarehouseService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.warehouse = []
    this.getWarehouses()
  }

  getWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe(wrh => this.warehouse = wrh)
  }
  goBack(): void {
    this.location.back()
  }

}
