import { PlayerInfo } from "../domain/player/playerInfo";
import { PlayerState } from "../domain/player/playerState";
import { PhaserPlayerView } from "./playerView";

export interface PlayerFacade {
    view: PhaserPlayerView,
    info: PlayerInfo,
    state: PlayerState
}