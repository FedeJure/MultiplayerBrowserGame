import { Socket } from "socket.io";
import { ConnectionsRepository } from "../infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "../infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "../infrastructure/repositories/playerStateRepository";
import { GameScene } from "../scenes/GameScene";
export declare class Game {
    readonly playerRepository: PlayerInfoRepository;
    readonly playerStateRepository: PlayerStateRepository;
    readonly gameScene: GameScene;
    readonly connectionsRepository: ConnectionsRepository;
    readonly socket: Socket;
    constructor(gameScene: GameScene, playerRepository: PlayerInfoRepository, playerStateRepository: PlayerStateRepository, connectionsRepository: ConnectionsRepository, socket: Socket);
    listenEvents(): void;
}
