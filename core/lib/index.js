"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectNewUser = exports.InitGame = void 0;
var game_1 = require("./domain/game");
var inMemoryPlayerRepository_1 = require("./infrastructure/inMemoryPlayerRepository");
var game;
var InitGame = function (gameScene) {
    var inMemoryRepository = new inMemoryPlayerRepository_1.InMemoryPlayerRepository(); // TODO: pasar por parametro
    game = new game_1.Game(gameScene, inMemoryRepository);
};
exports.InitGame = InitGame;
var ConnectNewUser = function (name) {
    if (!game)
        throw new Error("No game running!");
};
exports.ConnectNewUser = ConnectNewUser;
