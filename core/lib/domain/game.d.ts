import { Socket } from "socket.io";
import { GameScene } from "../scenes/GameScene";
import { CoreProvider } from "../coreProvider";
export declare class Game {
    readonly gameScene: GameScene;
    readonly socket: Socket;
    readonly provider: CoreProvider;
    constructor(gameScene: GameScene, coreProvider: CoreProvider, socket: Socket);
    listenEvents(): void;
}
