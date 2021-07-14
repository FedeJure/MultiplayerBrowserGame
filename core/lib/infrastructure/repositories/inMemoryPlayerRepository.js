"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPlayerRepository = void 0;
var InMemoryPlayerRepository = /** @class */ (function () {
    function InMemoryPlayerRepository() {
        this.store = new Map();
    }
    InMemoryPlayerRepository.prototype.getPlayer = function (id) {
        return this.store.has(id) ? this.store.get(id) : undefined;
    };
    return InMemoryPlayerRepository;
}());
exports.InMemoryPlayerRepository = InMemoryPlayerRepository;
