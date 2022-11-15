import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetParentComponent } from './asset-parent/asset-parent.component';

const routes: Routes = [
  { path: '', component: AssetParentComponent },
  { path: 'asset-add', component: AssetAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
