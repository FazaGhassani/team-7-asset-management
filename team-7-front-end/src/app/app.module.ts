import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetParentComponent } from './asset-parent/asset-parent.component';
import { AssetChildComponent } from './asset-child/asset-child.component';
import { LoginComponent } from './login/login.component';
import { WarehouseParentComponent } from './warehouse-parent/warehouse-parent.component';
import { WarehouseChildComponent } from './warehouse-child/warehouse-child.component';
import { UserParentComponent } from './user-parent/user-parent.component';
import { UserChildComponent } from './user-child/user-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetParentComponent,
    AssetChildComponent,
    LoginComponent,
    WarehouseParentComponent,
    WarehouseChildComponent,
    UserParentComponent,
    UserChildComponent,
    NavbarComponent,
    AssetAddComponent,
    WarehouseAddComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
