"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCoreProviderInstance = exports.DefaultCoreProvider = void 0;
var connectionsRepository_1 = require("./infrastructure/repositories/connectionsRepository");
var playerViewRepository_1 = require("./infrastructure/repositories/playerViewRepository");
var inMemoryPlayerRepository_1 = require("./infrastructure/repositories/inMemoryPlayerRepository");
var inMemoryPlayerStateRepository_1 = require("./infrastructure/repositories/inMemoryPlayerStateRepository");
var DefaultCoreProvider = /** @class */ (function () {
    function DefaultCoreProvider() {
        this.connectionsRepository = new connectionsRepository_1.ConnectionsRepository();
        this.playerInfoRepository = new inMemoryPlayerRepository_1.InMemoryPlayerRepository();
        this.playerStateRepository = new inMemoryPlayerStateRepository_1.InMemoryPlayerStateRepository();
        this.playerViewRepository = new playerViewRepository_1.PlayerViewRepository();
    }
    return DefaultCoreProvider;
}());
exports.DefaultCoreProvider = DefaultCoreProvider;
exports.DefaultCoreProviderInstance = new DefaultCoreProvider();
