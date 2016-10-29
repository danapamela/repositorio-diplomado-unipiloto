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
var SaleDetailComponent = (function () {
    function SaleDetailComponent(saleService, route) {
        this.saleService = saleService;
        this.route = route;
    }
    SaleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.saleService.getSale(id)
                .then(function (sale) { return _this.sale = sale; });
        });
    };
    SaleDetailComponent = __decorate([
        core_1.Component({
            selector: 'sale-detail-app',
            templateUrl: 'app/templates/sale-detail.html',
            providers: [sale_service_1.SaleService]
        }), 
        __metadata('design:paramtypes', [sale_service_1.SaleService, router_1.ActivatedRoute])
    ], SaleDetailComponent);
    return SaleDetailComponent;
}());
exports.SaleDetailComponent = SaleDetailComponent;
//# sourceMappingURL=sale-detail.component.js.map