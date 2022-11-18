import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../model/asset';
import { AssetService } from '../service/asset.service';

@Component({
  selector: 'app-asset-child',
  templateUrl: './asset-child.component.html',
  styleUrls: ['./asset-child.component.css']
})
export class AssetChildComponent implements OnInit {
  @Input() assetChild!: Asset[]
  constructor(private assetService: AssetService, private router: Router) { }
  deleteAsset(id: number): void {
    let index = this.assetChild.findIndex(d => d.id === id)
    this.assetService.deleteAsset(id).subscribe(a => this.assetChild.splice(index, 1))
  }
  ngOnInit(): void {
  }
  update(id: number) {
    this.router.navigateByUrl('/asset-update/:id', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/asset-update', id]);
    });
  }

}
