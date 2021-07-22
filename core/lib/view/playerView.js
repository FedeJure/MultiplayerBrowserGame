"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerView = void 0;
var phaser_1 = require("phaser");
var PlayerView = /** @class */ (function (_super) {
    __extends(PlayerView, _super);
    function PlayerView(scene, player) {
        var _this = _super.call(this, scene, player.state.x, player.state.y) || this;
        _this.player = player;
        return _this;
        // this.body.gameObject.setDrag(100)
        // this.body.gameObject.setAngularDrag(100)
        // this.body.gameObject.setCollideWorldBounds(false)
    }
    return PlayerView;
}(phaser_1.GameObjects.Container));
exports.PlayerView = PlayerView;
