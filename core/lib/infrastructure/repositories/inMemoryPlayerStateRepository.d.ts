import { PlayerState } from "../../domain/playerState";
import { PlayerStateRepository } from "./playerStateRepository";
export declare class InMemoryPlayerStateRepository implements PlayerStateRepository {
    store: Map<number, PlayerState>;
    getPlayerState(id: number): PlayerState | undefined;
}
