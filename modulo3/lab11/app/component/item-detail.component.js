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
var item_service_1 = require("../service/item.service");
var router_1 = require("@angular/router");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(ItemService, route) {
        this.ItemService = ItemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var linenumber = +params['linenumber'];
            _this.ItemService.getItem(linenumber)
                .then(function (item) { return _this.item = item; });
        });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'item-detail-app',
            templateUrl: 'app/templates/item-detail.html',
            providers: [item_service_1.ItemService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map