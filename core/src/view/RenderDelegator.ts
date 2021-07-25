import { GameScene } from "./GameScene";
import { PlayerView } from "./playerView";

export interface RenderDelegator {
    renderPlayer(player: PlayerView): void
}