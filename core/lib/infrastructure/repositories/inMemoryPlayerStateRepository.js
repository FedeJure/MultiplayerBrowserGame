"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPlayerStateRepository = void 0;
var InMemoryPlayerStateRepository = /** @class */ (function () {
    function InMemoryPlayerStateRepository() {
        this.store = new Map();
    }
    InMemoryPlayerStateRepository.prototype.getPlayerState = function (id) {
        return this.store.has(id) ? this.store.get(id) : undefined;
    };
    return InMemoryPlayerStateRepository;
}());
exports.InMemoryPlayerStateRepository = InMemoryPlayerStateRepository;
