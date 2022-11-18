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
import { CheckoutUpdateComponent } from './checkout-update/checkout-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ReportParentComponent } from './report-parent/report-parent.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { LoginComponent } from './login/login.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { AuthguardService } from './service/authguard.service';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: ReportParentComponent },
  { path: 'report-detail', component: ReportDetailComponent },
  { path: 'asset', component: AssetParentComponent, canActivate: [AuthguardService] },
  { path: 'asset-add', component: AssetAddComponent, canActivate: [AuthguardService] },
  { path: 'asset-update/:id', component: AssetEditComponent, canActivate: [AuthguardService] },
  { path: 'warehouse', component: WarehouseParentComponent, canActivate: [AuthguardService] },
  { path: 'warehouse-add', component: WarehouseAddComponent, canActivate: [AuthguardService] },
  { path: 'warehouse-update/:id', component: WarehouseEditComponent, canActivate: [AuthguardService] },
  { path: 'user', component: UserParentComponent, canActivate: [AuthguardService] },
  { path: 'user-add', component: UserAddComponent, canActivate: [AuthguardService] },
  { path: 'user-update/:id', component: UserEditComponent, canActivate: [AuthguardService] },
  { path: 'checkin', component: CheckinParentComponent, canActivate: [AuthguardService] },
  { path: 'checkin-add', component: CheckinAddComponent, canActivate: [AuthguardService] },
  { path: 'checkout', component: CheckoutParentComponent, canActivate: [AuthguardService] },
  { path: 'checkout-add', component: CheckoutAddComponent, canActivate: [AuthguardService] },
  { path: 'checkout-update/:id', component: CheckoutUpdateComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
