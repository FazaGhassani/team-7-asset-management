import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Asset, AssetModel } from '../model/asset';
import { AssetService } from '../service/asset.service';

@Component({
  selector: 'app-asset-parent',
  templateUrl: './asset-parent.component.html',
  styleUrls: ['./asset-parent.component.css']
})
export class AssetParentComponent implements OnInit {
  namePage: string = "Asset Menu"
  asset: Asset[] = []
  constructor(private assetService: AssetService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.asset = []
    this.getAssets()
  }

  getAssets(): void {
    this.assetService.getAssets().subscribe(asst => this.asset = asst)
  }
  goBack(): void {
    this.location.back()
  }

}
