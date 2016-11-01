import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ItemDetailComponent} from "../component/item-detail.component";
import {ItemListComponent} from "../component/item-list.component";
import {CustomerDetailComponent} from "../component/customer-detail.component";
import {CustomerListComponent} from "../component/customer-list.component";
import {SaleDetailComponent} from "../component/sale-detail.component";
import {SaleListComponent} from "../component/sale-list.component";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/item', pathMatch: 'full' },
    { path: 'item/detail/:id', component: ItemDetailComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: 'customer-detail', component: CustomerDetailComponent },
    { path: 'customer-list', component: CustomerListComponent },
    { path: 'sale-detail/:id', component: SaleDetailComponent },
    { path: 'sale-list', component: SaleListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}