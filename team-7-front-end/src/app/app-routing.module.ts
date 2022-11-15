import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetParentComponent } from './asset-parent/asset-parent.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import { WarehouseParentComponent } from './warehouse-parent/warehouse-parent.component';

const routes: Routes = [
  { path: '', component: AssetParentComponent },
  { path: 'asset', component: AssetParentComponent },
  { path: 'asset-add', component: AssetAddComponent },
  { path: 'warehouse', component: WarehouseParentComponent },
  { path: 'warehouse-add', component: WarehouseAddComponent },
  { path: 'user', component: UserParentComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'checkIn', component: AssetParentComponent },
  { path: 'checkOut', component: AssetParentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
