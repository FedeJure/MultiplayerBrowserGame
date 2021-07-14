import { PlayerState } from "../../domain/playerState";
import { PlayerStateRepository } from "./playerStateRepository";

export class InMemoryPlayerStateRepository implements PlayerStateRepository {

    store: Map<number, PlayerState> = new Map<number, PlayerState>()

    getPlayerState(id: number) : PlayerState | undefined {
        return this.store.has(id) ? this.store.get(id) : undefined
    }
}