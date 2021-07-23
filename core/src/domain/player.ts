import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerState } from "./playerState";
import { PlayerInfo } from "./playerInfo";
import { PlayerView } from "../view/playerView";


export class Player {
    public readonly config: PlayerConfiguration
    public readonly state: PlayerState
    public readonly playerInfo: PlayerInfo
    public readonly playerView: PlayerView

    constructor(config: PlayerConfiguration,
        playerInfo: PlayerInfo,
        playerState: PlayerState,
        playerView: PlayerView) {
        this.config = config
        this.playerInfo = playerInfo
        this.state = playerState
        this.playerView = playerView
    }
}