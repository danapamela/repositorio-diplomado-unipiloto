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
var sale_detail_component_1 = require("../component/sale-detail.component");
var sale_list_component_1 = require("../component/sale-list.component");
var product_list_component_1 = require("../component/product-list.component");
var product_detail_component_1 = require("../component/product-detail.component");
var routes = [
    { path: '', redirectTo: '/item', pathMatch: 'full' },
    { path: 'sale-detail', component: sale_detail_component_1.SaleDetailComponent },
    { path: 'sale-list', component: sale_list_component_1.SaleListComponent },
    { path: 'product-list', component: product_list_component_1.ProductListComponent },
    { path: 'product/detail/:id', component: product_detail_component_1.ProductDetailComponent },
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
//# sourceMappingURL=item-routing.module.js.map