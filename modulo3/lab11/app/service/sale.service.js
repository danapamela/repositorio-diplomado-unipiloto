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
var core_1 = require("@angular/core");
var sale_mock_1 = require("../mock/sale-mock");
var SaleService = (function () {
    function SaleService() {
    }
    SaleService.prototype.getSales = function () {
        return Promise.resolve(sale_mock_1.SALES);
    };
    SaleService.prototype.getSale = function (id) {
        return this.getSales()
            .then(function (sales) { return sales.find(function (sale) { return sale.id === id; }); });
    };
    SaleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SaleService);
    return SaleService;
}());
exports.SaleService = SaleService;
//# sourceMappingURL=sale.service.js.map