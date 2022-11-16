import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetParentComponent } from './asset-parent/asset-parent.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import { WarehouseParentComponent } from './warehouse-parent/warehouse-parent.component';
import { CheckinParentComponent } from "./checkin-parent/checkin-parent.component";
import { CheckoutParentComponent } from "./checkout-parent/checkout-parent.component";
import { CheckinAddComponent } from "./checkin-add/checkin-add.component";
import { CheckoutAddComponent } from "./checkout-add/checkout-add.component";
import { UserAddComponent } from './user-add/user-add.component';
import { ReportParentComponent } from './report-parent/report-parent.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ReportParentComponent },
  { path: 'report-detail', component: ReportDetailComponent },
  { path: 'asset', component: AssetParentComponent },
  { path: 'asset-add', component: AssetAddComponent },
  { path: 'warehouse', component: WarehouseParentComponent },
  { path: 'warehouse-add', component: WarehouseAddComponent },
  { path: 'user', component: UserParentComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'checkin', component: CheckinParentComponent },
  { path: 'checkin-add', component: CheckinAddComponent },
  { path: 'checkout', component: CheckoutParentComponent },
  { path: 'checkout-add', component: CheckoutAddComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
