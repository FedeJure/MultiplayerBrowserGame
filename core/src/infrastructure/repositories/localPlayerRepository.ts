import { Player } from "../../domain/player/player"

export class LocalPlayerRepository {
    private _player: Player | undefined

    setPlayer(player: Player) {
        this._player = player
    }

    get player() { return this._player}
}