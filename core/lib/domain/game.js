"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var player_1 = require("./player");
var Game = /** @class */ (function () {
    function Game(gameScene, playerRepository) {
        this.playerRepository = playerRepository;
        this.gameScene = gameScene;
        // this.gameScene.events.on("create", () => {
        //     gameScene.addPlayers(playerRepository.getActivePlayers())
        // })
        // io.on("connection", socket => {
        //     this.addPlayer(socket.id, 0, 30, socket.handshake.query.name);
        //     socket.emit("connectionSuccess", players[socket.id].getRepresentation());
        //     chatController.addToChatRoom(socket);
        //     socket.on("disconnect", () => {
        //       this.removePlayer(socket.id);
        //       delete players[socket.id];
        //       io.emit("disconnect", socket.id);
        //     });
        //     socket.on("playerInput", ({ input, state }) => {
        //       if (players[socket.id]) {
        //         players[socket.id].input = input;
        //         players[socket.id].lastState = state;
        //       }
        //     });
        //     globalEventEmitter.addListener("playerDie", playerId => {
        //       //io.emit("playerDie", playerId);
        //       players[playerId].resetPlayer();
        //     });
        //   });
    }
    Game.prototype.addPlayer = function (id, name) {
        this.gameScene.addPlayers([player_1.createPlayerWith(id, name)]);
    };
    return Game;
}());
exports.Game = Game;
