"use strict";
var InMemoryClientService = (function () {
    function InMemoryClientService() {
    }
    InMemoryClientService.prototype.createDb = function () {
        var clients = [
            {
                id: 1,
                name: "Jeffrey Rolando Gomez Pulido",
                age: 36
            },
            {
                id: 2,
                name: "Gina Paola Duarte Samaca",
                age: 20
            },
            {
                id: 3,
                name: "Nicolas Valencia Asttudillo",
                age: 27
            }
        ];
        return { clients: clients };
    };
    return InMemoryClientService;
}());
exports.InMemoryClientService = InMemoryClientService;
//# sourceMappingURL=in-memory-client.service.js.map