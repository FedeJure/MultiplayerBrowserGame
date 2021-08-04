import { PlayerInput } from "../domain/playerInput";
import { PresenterProvider } from "../presentation/presenterProvider";
import { ServerPlayerPresenter } from "../presentation/serverPlayerPresenter";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ServerPresenterProvider {
    forPlayer(view: PlayerView, input: PlayerInput): void {
        new ServerPlayerPresenter(view, input)
    }
}