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
var client_service_1 = require("../service/client.service");
var router_1 = require("@angular/router");
var ClientListComponent = (function () {
    function ClientListComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
        this.title = "clientes";
    }
    ClientListComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (error) {
            console.log(error);
        });
    };
    ClientListComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientListComponent.prototype.onSelect = function (client) {
        this.selected = client;
    };
    ClientListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.clientService.create(name)
            .subscribe(function (client) {
            _this.clients.push(client);
            _this.selected = null;
        });
    };
    __decorate([
        input(), 
        __metadata('design:type', String)
    ], ClientListComponent.prototype, "title", void 0);
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'client-list-app',
            templateUrl: 'app/templates/client-list.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, client_service_1.ClientService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map