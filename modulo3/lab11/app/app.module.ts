import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { CustomerDetailComponent } from './component/customer-detail.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {CustomerListComponent} from "./component/customer-list.component";
import {ItemDetailComponent} from "./component/item-detail.component";
import {ItemListComponent} from "./component/item-list.component";
import {APP_BASE_HREF} from "@angular/common";
import {ProductListComponent} from "./component/product-list.component";
import {ProductDetailComponent} from "./component/product-detail.component";
import {SaleDetailComponent} from "./component/sale-detail.component";
import {SaleListComponent} from "./component/sale-list.component";


@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      CustomerDetailComponent,
      CustomerListComponent,
      ItemDetailComponent,
      ItemListComponent,
      ProductListComponent,
      ProductDetailComponent,
      SaleDetailComponent,
      SaleListComponent,
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }