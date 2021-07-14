import { PlayerInfo } from "../../domain/playerInfo";
import { PlayerInfoRepository } from "./playerInfoRepository";
export declare class InMemoryPlayerRepository implements PlayerInfoRepository {
    store: Map<number, PlayerInfo>;
    getPlayer(id: number): PlayerInfo | undefined;
}
