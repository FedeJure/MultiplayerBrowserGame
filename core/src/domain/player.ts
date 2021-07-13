import { PlayerConfiguration } from "./playerConfiguration";
import { PlayerState } from "./playerState";
import { PlayerInfo } from "./playerInfo";
import { Side } from "./side";

export class Player {
    public readonly config: PlayerConfiguration
    public readonly state: PlayerState
    public readonly playerInfo: PlayerInfo

    constructor(config: PlayerConfiguration, playerInfo: PlayerInfo, initialX?: number, initialY?: number) {
        this.config = config
        this.playerInfo = playerInfo
        this.state = new PlayerState(config.initialLife,
            config.initialJumps,
            initialX || 0,
            initialY || 0);
    }
}

export function createPlayerWith(id: number, name: string) {
    const config: PlayerConfiguration = {
        initialLife: 100,
        initialJumps: 2,
        height: 50,
        width: 30,
        jumpVelocity: 100,
        runVelocity: 50,
        initialSide: Side.RIGHT
    }

    const info: PlayerInfo = {
        id, name
    }

    return new Player(config, info)


}