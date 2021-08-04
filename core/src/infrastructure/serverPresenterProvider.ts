import { PlayerInput } from "../domain/player/playerInput";
import { PresenterProvider } from "../presentation/presenterProvider";
import { ServerPlayerPresenter } from "../presentation/serverPlayerPresenter";
import { PhaserPlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ServerPresenterProvider {
    forPlayer(view: PhaserPlayerView, input: PlayerInput): void {
        new ServerPlayerPresenter(view, input)
    }
}