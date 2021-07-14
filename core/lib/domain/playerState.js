"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerState = void 0;
var PlayerState = /** @class */ (function () {
    function PlayerState(x, y, life, jumpsAvailable) {
        this.life = life;
        this.jumpsAvailable = jumpsAvailable;
        this.inInertia = false;
        this.canMove = true,
            this.x = x;
        this.y = y;
    }
    return PlayerState;
}());
exports.PlayerState = PlayerState;
