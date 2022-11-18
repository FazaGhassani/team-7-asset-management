import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Asset, AssetModel } from '../model/asset';
import { AssetService } from '../service/asset.service';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.css']
})
export class AssetEditComponent implements OnInit {
  namePage: string = "Update Asset Data";
  modelAsset = new AssetModel(0, '', '', '');
  submitted = false;
  asset: Asset[] = []
  idAsset: any;
  constructor(private assetService: AssetService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.idAsset = this.route.snapshot.paramMap.get('id')
    this.getAssetById(this.idAsset)
  }
  getAssetById(id: string) {
    try {
      this.assetService.getAssetById(id).subscribe((res) => {
        //this.freelancer = res;
        this.modelAsset.id = res.id;
        this.modelAsset.name = res.name;
        this.modelAsset.description = res.description;
        this.modelAsset.barcode = res.barcode;
      });
    } catch (e) {
      alert("Data tidak bisa keluar");
    }
  }

  updateAsset(
    id: number = this.modelAsset.id,
    name: string = this.modelAsset.name,
    description: string = this.modelAsset.description,
    barcode: string = this.modelAsset.barcode
  ): void {
    this.assetService.editAsset({ id, name, description, barcode }).subscribe(res => { this.asset.push(res) })
    this.router.navigateByUrl('/asset/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/asset/'])
    })
  }
  onSubmit() {
    this.submitted = true;
    this.updateAsset();
  }

  goBack(): void {
    this.location.back()
  }

}
