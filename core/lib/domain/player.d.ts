import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerState } from "./playerState";
import { PlayerInfo } from "./playerInfo";
export declare class Player {
    readonly config: PlayerConfiguration;
    readonly state: PlayerState;
    readonly playerInfo: PlayerInfo;
    constructor(config: PlayerConfiguration, playerInfo: PlayerInfo, playerState: PlayerState);
}
