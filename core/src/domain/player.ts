import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerState } from "./playerState";
import { PlayerInfo } from "./playerInfo";

export class Player {
    public readonly config: PlayerConfiguration
    public readonly state: PlayerState
    public readonly playerInfo: PlayerInfo

    constructor(config: PlayerConfiguration, playerInfo: PlayerInfo, playerState: PlayerState) {
        this.config = config
        this.playerInfo = playerInfo
        this.state = playerState
    }
}