"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectNewUser = exports.InitGame = void 0;
var game_1 = require("./domain/game");
var inMemoryPlayerRepository_1 = require("./infrastructure/repositories/inMemoryPlayerRepository");
var socketIoEvents_1 = require("./infrastructure/events/socketIoEvents");
var game;
var InitGame = function (gameScene, socket) {
    socket.on(socketIoEvents_1.SocketIOEvents.CONNECTION, function (client) {
        //save connection in repository
        var connection = {
            connectionId: client.client.id,
            connectionTime: new Date()
        };
        console.log("[Event: " + socketIoEvents_1.SocketIOEvents.CONNECTION + "] :: with connection id: " + client.client.id);
        client.on(socketIoEvents_1.SocketIOEvents.DISCONNECT, function () {
            console.log("[Event: " + socketIoEvents_1.SocketIOEvents.DISCONNECT + "] :: with connection id: " + client.client.id);
        });
    });
    var inMemoryRepository = new inMemoryPlayerRepository_1.InMemoryPlayerRepository();
    game = new game_1.Game(gameScene, inMemoryRepository);
};
exports.InitGame = InitGame;
var ConnectNewUser = function (name) {
    if (!game)
        throw new Error("No game running!");
};
exports.ConnectNewUser = ConnectNewUser;
