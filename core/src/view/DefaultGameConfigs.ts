import { GameConfig } from "./gameConfig";
import { GameScene } from "./scenes/GameScene";

export const ClientConfig: GameConfig = {
  type: Phaser.AUTO,
  parent: "gameContainer",
  width: 800,
  height: 600,
  autoFocus: false,
  physics: {
    default: "matter",
    matter: {
      enableSleeping: true,
      gravity: {
        y: 4,
      },
      debug: {
        showBody: true,
        showStaticBody: true,
      },
    },
  },
};

export const ServerConfig: GameConfig = {
  type: Phaser.HEADLESS,
  parent: "gameContainer",
  width: 800,
  height: 600,
  autoFocus: true,
  physics: {
    default: "matter",
    matter: {
      enableSleeping: false,
      gravity: {
        y: 4,
      },
      debug: {
        showBody: false,
        showStaticBody: false,
      },
    },
  },
};
