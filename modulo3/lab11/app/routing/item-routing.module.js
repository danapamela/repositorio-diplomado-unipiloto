"use strict";
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
//# sourceMappingURL=item-routing.module.js.map