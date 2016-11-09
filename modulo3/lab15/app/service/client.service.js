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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.clientsURI = 'http://localhost:3000/api/clients';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.clientsURI)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ClientService.prototype.update = function (client) {
        var url = this.clientsURI + "/" + client.id;
        return this.http
            .put(url, JSON.stringify(client), { headers: this.headers })
            .map(function () { return client; })
            .catch(this.handleError);
    };
    ClientService.prototype.create = function (name) {
        return this.http
            .post(this.clientsURI, JSON.stringify({ name: name }), { headers: this.headers })
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ClientService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Rx_1.Observable.throw(error.message || error);
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map