import { GameConfig } from "./gameConfig";
import { GameScene } from "./GameScene";

export const ClientConfig : GameConfig = {
    type: Phaser.AUTO,
    parent: "gameContainer",
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 2000 }
        }
    },
    scene: [GameScene]
}

export const ServerConfig : GameConfig = {
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
    scene: [GameScene]
}