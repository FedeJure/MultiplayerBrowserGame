import { PlayerView } from "../view/playerView";
import { PlayerInfo } from "./playerInfo";

export interface PlayerFacade {
    view: PlayerView,
    info: PlayerInfo
}