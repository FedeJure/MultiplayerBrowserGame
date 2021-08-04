import { PlayerState } from "../../domain/player/playerState";
import { PlayerStateRepository } from "./playerStateRepository";

export class InMemoryPlayerStateRepository implements PlayerStateRepository {
    store: Map<string, PlayerState> = new Map()

    getPlayerState(id: string) : PlayerState | undefined {
        return this.store.has(id) ? this.store.get(id) : undefined
    }

    setPlayerState(id: string, state: PlayerState): void {
        this.store.set(id, state)
    }
}