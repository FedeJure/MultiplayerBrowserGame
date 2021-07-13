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
        var _a, _b, _c;
        var _this = _super.call(this, scene, player.state.x, player.state.y) || this;
        _this.player = player;
        (_a = _this.body.gameObject) === null || _a === void 0 ? void 0 : _a.setDrag(100);
        (_b = _this.body.gameObject) === null || _b === void 0 ? void 0 : _b.setAngularDrag(100);
        (_c = _this.body.gameObject) === null || _c === void 0 ? void 0 : _c.setCollideWorldBounds(false);
        return _this;
    }
    return PlayerView;
}(phaser_1.GameObjects.Container));
exports.PlayerView = PlayerView;
