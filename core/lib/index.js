"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitClientGame = exports.InitGame = void 0;
var serverGame_1 = require("./domain/serverGame");
var socketIoEvents_1 = require("./infrastructure/events/socketIoEvents");
var coreProvider_1 = require("./coreProvider");
var GameScene_1 = require("./view/GameScene");
var clientGame_1 = require("./domain/clientGame");
var socketClientConnection_1 = require("./infrastructure/socketClientConnection");
var DefaultGameConfigs_1 = require("./view/DefaultGameConfigs");
var ClientGameScene_1 = require("./view/ClientGameScene");
var InitGame = function (socket) {
    var scene = new GameScene_1.GameScene;
    var config = __assign(__assign({}, DefaultGameConfigs_1.ServerConfig), { scene: scene });
    var phaserGame = new Phaser.Game(config);
    var game = new serverGame_1.ServerGame(config.scene, coreProvider_1.DefaultCoreProviderInstance);
    socket.on(socketIoEvents_1.SocketIOEvents.CONNECTION, function (clientSocket) {
        //save connection in repository
        var connection = new socketClientConnection_1.SocketClientConnection(clientSocket);
        coreProvider_1.DefaultCoreProviderInstance.connectionsRepository.addConnection(connection);
        console.log("[Event: " + socketIoEvents_1.SocketIOEvents.CONNECTION + "] :: with connection id: " + clientSocket.id);
        clientSocket.on(socketIoEvents_1.SocketIOEvents.DISCONNECT, function () {
            coreProvider_1.DefaultCoreProviderInstance.connectionsRepository.removeConnection(connection.connectionId);
            console.log("[Event: " + socketIoEvents_1.SocketIOEvents.DISCONNECT + "] :: with connection id: " + clientSocket.id);
        });
    });
};
exports.InitGame = InitGame;
var InitClientGame = function (socket) {
    var scene = new ClientGameScene_1.ClientGameScene();
    var config = __assign(__assign({}, DefaultGameConfigs_1.ClientConfig), { scene: scene });
    var phaserGame = new Phaser.Game(config);
    var game = new clientGame_1.ClientGame(coreProvider_1.DefaultCoreProviderInstance, socket);
};
exports.InitClientGame = InitClientGame;
