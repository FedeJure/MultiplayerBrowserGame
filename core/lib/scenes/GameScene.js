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
exports.GameScene = void 0;
var playerView_1 = require("../domain/playerView");
var playerViewRepository_1 = require("../infrastructure/repositories/playerViewRepository");
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, { key: "gameScene" }) || this;
        _this.playerViewRepository = new playerViewRepository_1.PlayerViewRepository();
        return _this;
    }
    GameScene.prototype.create = function () {
        this.playersGroup = this.physics.add.group();
        this.platformsGroup = this.physics.add.staticGroup();
        this.initPlatforms();
        this.initPlayersOverlap();
    };
    GameScene.prototype.addPlayers = function (players) {
        var _this = this;
        players.forEach(function (player) {
            _this.addPlayer(player);
        });
    };
    GameScene.prototype.addPlayer = function (player) {
        var _a;
        var playerView = new playerView_1.PlayerView(this, player);
        this.physics.add.existing(playerView);
        this.add.existing(playerView);
        (_a = this.playersGroup) === null || _a === void 0 ? void 0 : _a.add(playerView);
        this.playerViewRepository.addPlayer(playerView, player.playerInfo.id);
        if (!this.platformsGroup)
            return;
        this.physics.add.collider(playerView, this.platformsGroup);
    };
    GameScene.prototype.removePlayer = function (playerId) {
        var _a;
        (_a = this.playerViewRepository.getPlayer(playerId)) === null || _a === void 0 ? void 0 : _a.destroy();
        this.playerViewRepository.removePlayer(playerId);
    };
    GameScene.prototype.initPlatforms = function () {
        var _a, _b;
        //TODO: refactorear esto para generar platform de archivo de configs
        var platformCount = 7;
        var platformY = 550;
        var lastPlatformX = -200;
        for (var i = 0; i < platformCount; i++) {
            (_a = this.platformsGroup) === null || _a === void 0 ? void 0 : _a.create(lastPlatformX, platformY, "ground");
            lastPlatformX += 200 * 0.5;
        }
        (_b = this.platformsGroup) === null || _b === void 0 ? void 0 : _b.addMultiple([
            new Phaser.GameObjects.Rectangle(this, -700, platformY, 10, 1000, 0, 100),
            new Phaser.GameObjects.Rectangle(this, 2000, platformY, 10, 1000, 0, 10)
        ]);
    };
    GameScene.prototype.onPlayerOverlapsOther = function (player1, player2) {
        //TODO: do stuffs
    };
    GameScene.prototype.initPlayersOverlap = function () {
        if (!this.playersGroup)
            return;
        this.physics.add.overlap(this.playersGroup, this.playersGroup, this.onPlayerOverlapsOther);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
