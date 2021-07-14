"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var gameEvents_1 = require("../infrastructure/events/gameEvents");
var providePlayerData_1 = require("../domain/actions/providePlayerData");
var Game = /** @class */ (function () {
    function Game(gameScene, coreProvider, socket) {
        this.provider = coreProvider;
        this.gameScene = gameScene;
        this.socket = socket;
        this.listenEvents();
    }
    Game.prototype.listenEvents = function () {
        var _this = this;
        this.socket.on(gameEvents_1.GameEvents.PLAYER_CONNECTED, function (data) {
            try {
                var id = data.id;
                var player = providePlayerData_1.ProvidePlayerData(id, _this.provider.playerInfoRepository, _this.provider.playerStateRepository);
                _this.gameScene.addPlayers([player]);
            }
            catch (error) {
                console.log("[Game event] " + gameEvents_1.GameEvents.PLAYER_CONNECTED + " ERROR: " + error);
            }
        });
    };
    return Game;
}());
exports.Game = Game;
