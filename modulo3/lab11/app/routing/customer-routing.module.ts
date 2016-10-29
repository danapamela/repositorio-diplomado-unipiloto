import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerDetailComponent} from "../component/customer-detail.component";
import {CustomerListComponent} from "../component/customer-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/customer', pathMatch: 'full' },
    { path: 'customer-detail', component: CustomerDetailComponent },
    { path: 'customer-list', component: CustomerListComponent },
];