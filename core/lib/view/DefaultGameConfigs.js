"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = exports.ClientConfig = void 0;
var GameScene_1 = require("./GameScene");
exports.ClientConfig = {
    type: Phaser.AUTO,
    parent: "gameContainer",
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 2000 }
        }
    },
    scene: [GameScene_1.GameScene]
};
exports.ServerConfig = {
    type: Phaser.HEADLESS,
    parent: "gameContainer",
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 2000 }
        }
    },
    scene: [GameScene_1.GameScene]
};
