import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetParentComponent } from './asset-parent/asset-parent.component';

const routes: Routes = [
  { path: '', component: AssetParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
