import { observe} from "rxjs-observe"
import { PlayerInfo } from "./playerInfo";
import { PlayerState } from "./playerState";
import { PlayerView } from "./playerView";

export class Player {
    private _state: PlayerState
    public readonly info: PlayerInfo
    public readonly view: PlayerView

    constructor(playerInfo: PlayerInfo,
        playerState: PlayerState,
        playerView: PlayerView) {
        this.info = playerInfo
        this._state = playerState
        this.view = playerView
        
        observe(this.view).observables.body.subscribe(body => {
            this._state = {...this._state, velocity: body.velocity, position: body.position}
        })
    }

    public get state() { return this._state }

    destroy() {
        this.view.destroy()
    }
}