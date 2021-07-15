import { Socket } from "socket.io";
import { Socket as ClientSocket } from "socket.io-client";
import { GameScene } from "../view/GameScene";
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";
export declare class Game {
    readonly gameScene: GameScene;
    readonly socket: Socket | ClientSocket;
    readonly provider: CoreProvider;
    constructor(config: GameConfig, gameScene: GameScene, coreProvider: CoreProvider, socket: Socket | ClientSocket);
    listenEvents(): void;
}
