import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerInfo } from "./playerInfo";
import { PhaserPlayerView } from "../../view/playerView";
import { PlayerState } from "./playerState";


export class Player {
    public readonly config: PlayerConfiguration
    public readonly state: PlayerState
    public readonly info: PlayerInfo
    public readonly view: PhaserPlayerView

    constructor(config: PlayerConfiguration,
        playerInfo: PlayerInfo,
        playerState: PlayerState,
        playerView: PhaserPlayerView) {
        this.config = config
        this.info = playerInfo
        this.state = playerState
        this.view = playerView
    }

    destroy() {
        this.view.destroy()
    }
}