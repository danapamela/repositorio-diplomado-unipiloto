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
var ItemListComponent = (function () {
    function ItemListComponent(router, ItemService) {
        this.router = router;
        this.ItemService = ItemService;
        this.title = "Line Item";
    }
    ItemListComponent.prototype.getItems = function () {
        var _this = this;
        this.ItemService.getItems().then(function (items) { return _this.items = items; });
    };
    ItemListComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemListComponent.prototype.onSelect = function (item) {
        this.selected = item;
    };
    ItemListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['item/detail/', this.selected.linenumber]);
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list-app',
            templateUrl: 'app/templates/item-list.html',
            providers: [item_service_1.ItemService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map