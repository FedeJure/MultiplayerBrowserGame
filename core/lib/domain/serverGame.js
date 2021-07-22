"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGame = void 0;
var providePlayerData_1 = require("../domain/actions/providePlayerData");
var ServerGame = /** @class */ (function () {
    function ServerGame(gameScene, coreProvider) {
        this.provider = coreProvider;
        this.gameScene = gameScene;
        //Mock player added 
        this.provider.playerInfoRepository.addPlayer(1, { id: 1, name: "Test Player" });
        this.listenEvents();
    }
    ServerGame.prototype.listenEvents = function () {
        var _this = this;
        this.provider.connectionsRepository.onNewConnection()
            .subscribe(function (connection) {
            connection.onPlayerConnection()
                .subscribe(function (_a) {
                var playerId = _a.playerId;
                return _this.addPlayer(playerId);
            });
        });
    };
    ServerGame.prototype.addPlayer = function (playerId) {
        try {
            var player = providePlayerData_1.ProvidePlayerData(parseInt(playerId, 10), this.provider.playerInfoRepository, this.provider.playerStateRepository);
            this.gameScene.addPlayers([player]);
            console.log("[Game addPlayer] player added to scene with id: " + playerId);
        }
        catch (error) {
            console.log("[Game addPlayer] ERROR: " + error);
        }
    };
    return ServerGame;
}());
exports.ServerGame = ServerGame;
