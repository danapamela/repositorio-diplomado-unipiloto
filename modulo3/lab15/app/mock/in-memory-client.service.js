"use strict";
var InMemoryClientService = (function () {
    function InMemoryClientService() {
    }
    InMemoryClientService.prototype.createDb = function () {
        var clients = [
            {
                id: 1,
                firstname: "Jeffrey Rolando Gomez Pulido",
                age: 36
            },
            {
                id: 2,
                firstname: "Gina Paola Duarte Samaca",
                age: 20
            },
            {
                id: 3,
                firstname: "Nicolas Valencia Asttudillo",
                age: 27
            }
        ];
        return { clients: clients };
    };
    return InMemoryClientService;
}());
exports.InMemoryClientService = InMemoryClientService;
//# sourceMappingURL=in-memory-client.service.js.map