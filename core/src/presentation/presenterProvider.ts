import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export interface PresenterProvider {
    forPlayer(view: PlayerView, local: boolean): void
    forGameplay(scene: GameScene): void
}