import { PlayerRepository } from "../infrastructure/repositories/playerRepository";
import { GameScene } from "../scenes/GameScene";
export declare class Game {
    playerRepository: PlayerRepository;
    gameScene: GameScene;
    constructor(gameScene: GameScene, playerRepository: PlayerRepository);
    addPlayer(id: number, name: string): void;
}
