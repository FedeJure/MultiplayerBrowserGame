import { Player } from "../domain/player";
import { PlayerRepository } from "./playerRepository";
export declare class InMemoryPlayerRepository implements PlayerRepository {
    getActivePlayers(): Array<Player>;
}
