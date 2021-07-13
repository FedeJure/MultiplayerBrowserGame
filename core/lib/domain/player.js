"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlayerWith = exports.Player = void 0;
var playerState_1 = require("./playerState");
var side_1 = require("./side");
var Player = /** @class */ (function () {
    function Player(config, playerInfo, initialX, initialY) {
        this.config = config;
        this.playerInfo = playerInfo;
        this.state = new playerState_1.PlayerState(config.initialLife, config.initialJumps, initialX || 0, initialY || 0);
    }
    return Player;
}());
exports.Player = Player;
function createPlayerWith(id, name) {
    var config = {
        initialLife: 100,
        initialJumps: 2,
        height: 50,
        width: 30,
        jumpVelocity: 100,
        runVelocity: 50,
        initialSide: side_1.Side.RIGHT
    };
    var info = {
        id: id,
        name: name
    };
    return new Player(config, info);
}
exports.createPlayerWith = createPlayerWith;
