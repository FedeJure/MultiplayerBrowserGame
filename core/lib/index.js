"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectNewUser = exports.InitClientGame = exports.InitGame = void 0;
var game_1 = require("./domain/game");
var socketIoEvents_1 = require("./infrastructure/events/socketIoEvents");
var coreProvider_1 = require("./coreProvider");
var game;
var InitGame = function (gameConfig, gameScene, socket) {
    socket.on(socketIoEvents_1.SocketIOEvents.CONNECTION, function (client) {
        //save connection in repository
        var connection = {
            connectionId: client.client.id,
            connectionTime: new Date()
        };
        coreProvider_1.DefaultCoreProviderInstance.connectionsRepository.addConnection(connection);
        console.log("[Event: " + socketIoEvents_1.SocketIOEvents.CONNECTION + "] :: with connection id: " + client.client.id);
        client.on(socketIoEvents_1.SocketIOEvents.DISCONNECT, function () {
            coreProvider_1.DefaultCoreProviderInstance.connectionsRepository.removeConnection(connection.connectionId);
            console.log("[Event: " + socketIoEvents_1.SocketIOEvents.DISCONNECT + "] :: with connection id: " + client.client.id);
        });
    });
    game = new game_1.Game(gameConfig, gameScene, coreProvider_1.DefaultCoreProviderInstance, socket);
};
exports.InitGame = InitGame;
var InitClientGame = function (gameConfig, gameScene, socket) {
    game = new game_1.Game(gameConfig, gameScene, coreProvider_1.DefaultCoreProviderInstance, socket);
};
exports.InitClientGame = InitClientGame;
var ConnectNewUser = function (name) {
    if (!game)
        throw new Error("No game running!");
};
exports.ConnectNewUser = ConnectNewUser;
