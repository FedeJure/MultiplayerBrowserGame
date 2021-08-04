import { PlayerFacade } from "../../view/playerFacade"

export class LocalPlayerRepository {
    private _player: PlayerFacade | undefined

    setPlayer(player: PlayerFacade) {
        this._player = player
    }

    get player() { return this._player}
}