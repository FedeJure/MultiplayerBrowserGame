import { PlayerInput } from "../domain/playerInput";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export interface PresenterProvider {
    forLocalPlayer(view: PlayerView, input: PlayerInput): void
    forPlayer(view: PlayerView): void
    forGameplay(scene: GameScene): void
}