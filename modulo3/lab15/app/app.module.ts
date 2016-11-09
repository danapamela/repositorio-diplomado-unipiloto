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
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "./mock/in-memory-product.service";
import {InMemoryClientService} from "./mock/in-memory-client.service";
import {ProductService} from "./service/product.service";
import {ClientService} from "./service/client.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryProductService, InMemoryClientService)
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      ProductListComponent,
      ClientDetailComponent,
      ClientListComponent
  ],
    providers: [ProductService, ClientService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }