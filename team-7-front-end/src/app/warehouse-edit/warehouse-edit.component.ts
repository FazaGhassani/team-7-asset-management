import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse, WarehouseModel } from '../model/warehouse';
import { WarehouseService } from '../service/warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {
  namePage: string = "Update Warehouse Data";
  modelWarehouse = new WarehouseModel(0, '');
  submitted = false;
  warehouse: Warehouse[] = [];
  idWarehouse: any;
  constructor(private warehouseService: WarehouseService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.idWarehouse = this.route.snapshot.paramMap.get('id')
    this.getWarehouseById(this.idWarehouse)
  }
  getWarehouseById(id: string) {
    try {
      this.warehouseService.getWarehouseById(id).subscribe((res) => {
        //this.freelancer = res;
        this.modelWarehouse.id = res.id;
        this.modelWarehouse.name = res.name;
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }
  updateWarehouse(
    id: number = this.modelWarehouse.id,
    name: string = this.modelWarehouse.name
  ): void {
    this.warehouseService.editWarehouse({ id, name }).subscribe(res => { this.warehouse.push(res); this.redirectTo('/warehouse') },
      err => { alert("ERROR! Mohon dicek kembali"); this.redirectTo('/warehouse-update/' + id) })

  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  onSubmit() {
    this.submitted = true;
    this.updateWarehouse();
  }

  goBack(): void {
    this.location.back()
  }

}
