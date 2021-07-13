import { Player } from "../../domain/player";
import { PlayerRepository } from "./playerRepository"

export class InMemoryPlayerRepository implements PlayerRepository {
    getActivePlayers() : Array<Player> {
        return []
    };
}