import { Component, Input, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';

@Component({
  selector: 'app-warehouse-child',
  templateUrl: './warehouse-child.component.html',
  styleUrls: ['./warehouse-child.component.css']
})
export class WarehouseChildComponent implements OnInit {
  @Input() warehouseChild!: Warehouse[]
  constructor() { }

  ngOnInit(): void {
  }

}
