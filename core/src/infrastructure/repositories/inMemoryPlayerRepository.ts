import { PlayerInfo } from "../../domain/playerInfo";
import { PlayerInfoRepository } from "./playerInfoRepository"

export class InMemoryPlayerRepository implements PlayerInfoRepository {

    store: Map<number, PlayerInfo> = new Map<number,PlayerInfo>()

    getPlayer(id: number): PlayerInfo | undefined {
        return this.store.has(id) ? this.store.get(id) : undefined
    }
}