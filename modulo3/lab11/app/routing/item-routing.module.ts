import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SaleDetailComponent} from "../component/sale-detail.component";
import {SaleListComponent} from "../component/sale-list.component";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/item', pathMatch: 'full' },
    { path: 'sale-detail', component: SaleDetailComponent },
    { path: 'sale-list', component: SaleListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}