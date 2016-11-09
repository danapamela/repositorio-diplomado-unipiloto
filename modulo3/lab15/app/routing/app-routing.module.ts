import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {ClientListComponent} from "../component/client-list.component";
import {ClientDetailComponent} from "../component/client-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'client-list',  component:  ClientListComponent},
    { path: 'client/detail/:id', component:ClientDetailComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}