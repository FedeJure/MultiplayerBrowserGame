import { PlayerInput } from "../domain/player/playerInput";
import { PhaserPlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export interface PresenterProvider {
    forLocalPlayer(view: PhaserPlayerView, input: PlayerInput): void
    forPlayer(view: PhaserPlayerView, input: PlayerInput): void
    forPlayer(view: PhaserPlayerView): void
    forGameplay(scene: GameScene): void
}