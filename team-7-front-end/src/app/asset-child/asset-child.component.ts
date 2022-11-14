import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '../model/asset';
import { AssetService } from '../service/asset.service';

@Component({
  selector: 'app-asset-child',
  templateUrl: './asset-child.component.html',
  styleUrls: ['./asset-child.component.css']
})
export class AssetChildComponent implements OnInit {
  @Input() assetChild!: Asset[]
  constructor() { }

  ngOnInit(): void {
  }

}
