"use strict";
var InMemoryProductService = (function () {
    function InMemoryProductService() {
    }
    InMemoryProductService.prototype.createDb = function () {
        var products = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 2,
                name: "Samsung galaxy 10",
                price: 1500000,
                quantity: 20
            },
            {
                id: 3,
                name: "Samsung galaxy 20",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            }
        ];
        return { products: products };
    };
    return InMemoryProductService;
}());
exports.InMemoryProductService = InMemoryProductService;
//# sourceMappingURL=in-memory-product.service.js.map