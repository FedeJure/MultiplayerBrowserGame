import { GameConfig } from "../../view/gameConfig";


export const ClientConfig: GameConfig = {
  type: Phaser.AUTO,
  parent: "gameContainer",
  width: 800,
  height: 600,
  autoFocus: true,
  fps: {
    min: 60,
  },
  physics: {
    default: "matter",
    matter: {
      enableSleeping: false,
      gravity: {
        y: 1,
      },
      debug: {
        showBody: true,
        showStaticBody: true,
      },
    },
  }
};

export const ServerConfig: GameConfig = {
  type: Phaser.HEADLESS,
  parent: "gameContainer",
  width: 800,
  height: 600,
  autoFocus: true,
  fps: {
    min: 60,
  },
  physics: {
    default: "matter",
    matter: {
      enableSleeping: false,
      gravity: {
        y: 1,
      },
      debug: {
        showBody: false,
        showStaticBody: false,
      },
    },
  }
};
