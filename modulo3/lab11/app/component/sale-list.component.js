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
var core_1 = require('@angular/core');
var sale_service_1 = require("../service/sale.service");
var router_1 = require("@angular/router");
var SaleListComponent = (function () {
    function SaleListComponent(router, saleService) {
        this.router = router;
        this.saleService = saleService;
        this.title = "Sales Invoice";
    }
    SaleListComponent.prototype.getSales = function () {
        var _this = this;
        this.saleService.getSales().then(function (sales) { return _this.sales = sales; });
    };
    SaleListComponent.prototype.ngOnInit = function () {
        this.getSales();
    };
    SaleListComponent.prototype.onSelect = function (sale) {
        this.selected = sale;
    };
    SaleListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['sale/detail/', this.selected.id]);
    };
    SaleListComponent = __decorate([
        core_1.Component({
            selector: 'sale-list-app',
            templateUrl: 'app/templates/sale-list.html',
            providers: [sale_service_1.SaleService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, sale_service_1.SaleService])
    ], SaleListComponent);
    return SaleListComponent;
}());
exports.SaleListComponent = SaleListComponent;
//# sourceMappingURL=sale-list.component.js.map