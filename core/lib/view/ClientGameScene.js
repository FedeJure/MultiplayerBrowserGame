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
exports.ClientGameScene = void 0;
var GameScene_1 = require("./GameScene");
var ClientGameScene = /** @class */ (function (_super) {
    __extends(ClientGameScene, _super);
    function ClientGameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientGameScene.prototype.create = function () {
        _super.prototype.create.call(this);
        this.setupPlayerImages();
    };
    ClientGameScene.prototype.setupPlayerImages = function () {
        console.log("Setupping player images!");
    };
    return ClientGameScene;
}(GameScene_1.GameScene));
exports.ClientGameScene = ClientGameScene;
