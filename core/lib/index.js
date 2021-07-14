"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectNewUser = exports.InitGame = void 0;
var game_1 = require("./domain/game");
var inMemoryPlayerRepository_1 = require("./infrastructure/repositories/inMemoryPlayerRepository");
var inMemoryPlayerStateRepository_1 = require("./infrastructure/repositories/inMemoryPlayerStateRepository");
var socketIoEvents_1 = require("./infrastructure/events/socketIoEvents");
var connectionsRepository_1 = require("./infrastructure/repositories/connectionsRepository");
var game;
var InitGame = function (gameScene, socket) {
    var connectionsRepository = new connectionsRepository_1.ConnectionsRepository();
    socket.on(socketIoEvents_1.SocketIOEvents.CONNECTION, function (client) {
        //save connection in repository
        var connection = {
            connectionId: client.client.id,
            connectionTime: new Date()
        };
        connectionsRepository.addConnection(connection);
        console.log("[Event: " + socketIoEvents_1.SocketIOEvents.CONNECTION + "] :: with connection id: " + client.client.id);
        client.on(socketIoEvents_1.SocketIOEvents.DISCONNECT, function () {
            connectionsRepository.removeConnection(connection.connectionId);
            console.log("[Event: " + socketIoEvents_1.SocketIOEvents.DISCONNECT + "] :: with connection id: " + client.client.id);
        });
    });
    var inMemoryPlayerInfoRepository = new inMemoryPlayerRepository_1.InMemoryPlayerRepository();
    var inMemoryPlayerStateRepository = new inMemoryPlayerStateRepository_1.InMemoryPlayerStateRepository();
    game = new game_1.Game(gameScene, inMemoryPlayerInfoRepository, inMemoryPlayerStateRepository, connectionsRepository, socket);
};
exports.InitGame = InitGame;
var ConnectNewUser = function (name) {
    if (!game)
        throw new Error("No game running!");
};
exports.ConnectNewUser = ConnectNewUser;
