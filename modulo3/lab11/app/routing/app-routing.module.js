"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var home_component_1 = require("../component/home.component");
var product_list_component_1 = require("../component/product-list.component");
var about_component_1 = require("../component/about.component");
var product_detail_component_1 = require("../component/product-detail.component");
var customer_component_1 = require("../component/customer.component");
var sales_invoice_list_component_1 = require("../component/sales-invoice-list.component");
var sales_invoice_detail_customer_component_1 = require("../component/sales-invoice-detail-customer.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/detail/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'customers', component: customer_component_1.CustomerComponent },
    { path: 'sales-invoices', component: sales_invoice_list_component_1.SalesInvoiceComponent },
    { path: 'sales-invoice/customer/detail/:id', component: sales_invoice_detail_customer_component_1.SalesInvoiceCustomerDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map