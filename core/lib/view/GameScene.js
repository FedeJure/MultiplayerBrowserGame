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
var playerView_1 = require("./playerView");
var playerViewRepository_1 = require("../infrastructure/repositories/playerViewRepository");
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, { key: "gameScene" }) || this;
        _this.addPlayers = function (players) {
            players.forEach(_this.addPlayer);
        };
        _this.addPlayer = function (player) {
            var _a;
            var playerView = new playerView_1.PlayerView(_this, player);
            _this.physics.add.existing(playerView);
            _this.add.existing(playerView);
            (_a = _this.playersGroup) === null || _a === void 0 ? void 0 : _a.add(playerView);
            _this.playerViewRepository.addPlayer(playerView, player.playerInfo.id);
            if (!_this.platformsGroup)
                return;
            _this.physics.add.collider(playerView, _this.platformsGroup);
        };
        _this.removePlayer = function (playerId) {
            var _a;
            (_a = _this.playerViewRepository.getPlayer(playerId)) === null || _a === void 0 ? void 0 : _a.destroy();
            _this.playerViewRepository.removePlayer(playerId);
        };
        _this.initPlatforms = function () {
            var _a, _b;
            //TODO: refactorear esto para generar platform de archivo de configs
            var platformCount = 7;
            var platformY = 550;
            var lastPlatformX = -200;
            for (var i = 0; i < platformCount; i++) {
                (_a = _this.platformsGroup) === null || _a === void 0 ? void 0 : _a.create(lastPlatformX, platformY, "ground");
                lastPlatformX += 200 * 0.5;
            }
            (_b = _this.platformsGroup) === null || _b === void 0 ? void 0 : _b.addMultiple([
                new Phaser.GameObjects.Rectangle(_this, -700, platformY, 10, 1000, 0, 100),
                new Phaser.GameObjects.Rectangle(_this, 2000, platformY, 10, 1000, 0, 10)
            ]);
        };
        _this.onPlayerOverlapsOther = function (player1, player2) {
            //TODO: do stuffs
        };
        _this.initPlayersOverlap = function () {
            if (!_this.playersGroup)
                return;
            _this.physics.add.overlap(_this.playersGroup, _this.playersGroup, _this.onPlayerOverlapsOther);
        };
        _this.playerViewRepository = new playerViewRepository_1.PlayerViewRepository();
        _this.playersToAdd = [];
        return _this;
    }
    GameScene.prototype.create = function () {
        this.playersGroup = this.physics.add.group();
        this.platformsGroup = this.physics.add.staticGroup();
        this.initPlatforms();
        this.initPlayersOverlap();
    };
    GameScene.prototype.update = function () {
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
