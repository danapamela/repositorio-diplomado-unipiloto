"use strict";
var customer_detail_component_1 = require("../component/customer-detail.component");
var customer_list_component_1 = require("../component/customer-list.component");
var routes = [
    { path: '', redirectTo: '/customer', pathMatch: 'full' },
    { path: 'customer-detail', component: customer_detail_component_1.CustomerDetailComponent },
    { path: 'customer-list', component: customer_list_component_1.CustomerListComponent },
];
//# sourceMappingURL=customer-routing.module.js.map