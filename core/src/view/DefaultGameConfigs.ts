import { GameConfig } from "./gameConfig";
import { GameScene } from "./GameScene";

export const ClientConfig : GameConfig = {
    type: Phaser.AUTO,
    parent: "gameContainer",
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 1
            },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        }
    },
    scene: [GameScene]
}

export const ServerConfig : GameConfig = {
    type: Phaser.HEADLESS,
    parent: "gameContainer",
    width: 800,
    height: 600,
    autoFocus: true,
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: false,
            gravity: {
                y: 1
            },
            debug: {
                showBody: false,
                showStaticBody: false
            }
        }
    },
    scene: [GameScene]
}