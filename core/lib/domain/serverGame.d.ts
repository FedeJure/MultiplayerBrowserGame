import { GameScene } from "../view/GameScene";
import { CoreProvider } from "../coreProvider";
export declare class ServerGame {
    readonly gameScene: GameScene;
    readonly provider: CoreProvider;
    constructor(gameScene: GameScene, coreProvider: CoreProvider);
    listenEvents(): void;
    addPlayer(playerId: string): void;
}
