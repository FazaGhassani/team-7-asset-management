import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetParentComponent } from './asset-parent/asset-parent.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import { WarehouseParentComponent } from './warehouse-parent/warehouse-parent.component';
import { CheckinParentComponent} from "./checkin-parent/checkin-parent.component";
import { CheckoutParentComponent} from "./checkout-parent/checkout-parent.component";
import {CheckinAddComponent} from "./checkin-add/checkin-add.component";
import {CheckoutAddComponent} from "./checkout-add/checkout-add.component";

const routes: Routes = [
  { path: '', component: AssetParentComponent },
  { path: 'asset', component: AssetParentComponent },
  { path: 'asset-add', component: AssetAddComponent },
  { path: 'warehouse', component: WarehouseParentComponent },
  { path: 'warehouse-add', component: WarehouseAddComponent },
  { path: 'user', component: UserParentComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'checkin', component: CheckinParentComponent },
  { path: 'checkin-add', component: CheckinAddComponent},
  { path: 'checkout', component: CheckoutParentComponent },
  { path: 'checkout-add', component: CheckoutAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
