import { ClientPlayerPresenter } from "../presentation/clientPlayerPresenter";
import { LocalPlayerPresenter } from "../presentation/localPlayerPresenter";
import { PresenterProvider } from "../presentation/presenterProvider";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ClientPresenterProvider implements PresenterProvider {
    forPlayer(view: PlayerView, local: boolean = false): void {
        local ? new LocalPlayerPresenter(view) : new ClientPlayerPresenter(view)
    }

    forGameplay(scene: GameScene): void {
        // new ClientGamePresenter()
    }

}