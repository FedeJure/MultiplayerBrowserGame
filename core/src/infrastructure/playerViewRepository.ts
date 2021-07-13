import { PlayerView } from "../domain/playerView";

export class PlayerViewRepository {

    playerDictionary: Map<string, PlayerView> = new Map();

    constructor() {

    }

    addPlayer(player: PlayerView, id: number) {
        this.playerDictionary.set(id.toString(), player)
    }

    getPlayer(id: number) : PlayerView | undefined {
        return this.playerDictionary.get(id.toString())
    }

    removePlayer(id: number) {
        this.playerDictionary.delete(id.toString())
    }
}

