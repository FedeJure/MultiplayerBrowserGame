import { PlayerView } from "../../domain/playerView";
export declare class PlayerViewRepository {
    playerDictionary: Map<string, PlayerView>;
    constructor();
    addPlayer(player: PlayerView, id: number): void;
    getPlayer(id: number): PlayerView | undefined;
    removePlayer(id: number): void;
}
