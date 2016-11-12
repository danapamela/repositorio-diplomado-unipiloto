import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import { ProductDetailComponent } from './component/product-detail.component';
import {ProductListComponent} from './component/product-list.component';
import {ClientDetailComponent} from './component/client-detail.component';
import {ClientListComponent} from './component/client-list.component';
import {HttpModule} from "@angular/http";
import {ProductService} from "./service/product.service";
import {ClientService} from "./service/client.service";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      ProductListComponent,
      ClientDetailComponent,
      ClientListComponent
  ],
  providers: [ProductService, ClientService, 
      {
          provide: APP_BASE_HREF, useValue : '/'

  }

  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }