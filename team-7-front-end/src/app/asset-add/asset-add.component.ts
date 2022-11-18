import { Component, OnInit } from '@angular/core';
import { Asset, AssetModel } from '../model/asset';
import { AssetService } from '../service/asset.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {
  namePage: string = "Form Add new Asset"
  asset: Asset[] = []
  modelAsset = new AssetModel(0, '', '', '')
  submitted = false;
  constructor(private assetService: AssetService, private location: Location) { }

  ngOnInit(): void {
    this.asset = []
  }
  onSubmit() {
    this.submitted = true;
    this.addAsset();
  }
  addAsset(
    id: number = this.modelAsset.id,
    name: string = this.modelAsset.name,
    description: string = this.modelAsset.description,
    barcode: string = this.modelAsset.barcode
  ): void {
    name = name.trim()
    description = description.trim()
    barcode = barcode.trim()
    if (!name || !description || !barcode) { return }
    this.assetService.addAsset({ id, name, description, barcode } as Asset).subscribe(asst => { this.asset.push(asst) })
    this.asset = []
  }
  goBack(): void {
    this.location.back()
  }

}
