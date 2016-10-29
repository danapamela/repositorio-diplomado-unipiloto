import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ItemDetailComponent} from "../component/item-detail.component";
import {ItemListComponent} from "../component/item-list.component";


const routes: Routes = [
    { path: '', redirectTo: '/item', pathMatch: 'full' },
    { path: 'item/detail/:id', component: ItemDetailComponent },
    { path: 'item-list', component: ItemListComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}