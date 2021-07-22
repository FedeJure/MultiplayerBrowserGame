import { Player } from '../domain/player';
import { PlayerViewRepository } from "../infrastructure/repositories/playerViewRepository";
export declare class GameScene extends Phaser.Scene {
    playersGroup: Phaser.Physics.Arcade.Group | undefined;
    playerViewRepository: PlayerViewRepository;
    platformsGroup: Phaser.Physics.Arcade.StaticGroup | undefined;
    protected playersToAdd: Player[];
    constructor();
    create(): void;
    update(): void;
    addPlayers: (players: Array<Player>) => void;
    private addPlayer;
    removePlayer: (playerId: number) => void;
    initPlatforms: () => void;
    onPlayerOverlapsOther: (player1: Phaser.Types.Physics.Arcade.GameObjectWithBody, player2: Phaser.Types.Physics.Arcade.GameObjectWithBody) => void;
    initPlayersOverlap: () => void;
}
