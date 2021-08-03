import { PlayerInput } from "../domain/playerInput";
import { PresenterProvider } from "../presentation/presenterProvider";
import { ServerPlayerPresenter } from "../presentation/serverPlayerPresenter";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ServerPresenterProvider implements PresenterProvider {
    forPlayer(view: PlayerView, local: boolean = false, input?: PlayerInput): void {
        if (input) new ServerPlayerPresenter(view, input)
    }

    forGameplay(scene: GameScene): void {
        // new ServerGamePresenter()
    }

}