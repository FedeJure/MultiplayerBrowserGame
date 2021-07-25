import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerState } from "./playerState";
import { PlayerInfo } from "./playerInfo";
import { PlayerView } from "../view/playerView";
import { PlayerFacade } from "./playerFacade";


export class Player implements PlayerFacade {
    public readonly config: PlayerConfiguration
    public readonly state: PlayerState
    public readonly info: PlayerInfo
    public readonly view: PlayerView

    constructor(config: PlayerConfiguration,
        playerInfo: PlayerInfo,
        playerState: PlayerState,
        playerView: PlayerView) {
        this.config = config
        this.info = playerInfo
        this.state = playerState
        this.view = playerView
    }
}