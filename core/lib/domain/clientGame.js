"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGame = void 0;
var ClientGame = /** @class */ (function () {
    function ClientGame(coreProvider, socket) {
        this.provider = coreProvider;
        this.socket = socket;
    }
    return ClientGame;
}());
exports.ClientGame = ClientGame;
