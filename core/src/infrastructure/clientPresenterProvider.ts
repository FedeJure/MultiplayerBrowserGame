import { ClientProvider } from "../clientProvider";
import { PlayerInput } from "../domain/playerInput";
import { ClientPlayerPresenter } from "../presentation/clientPlayerPresenter";
import { LocalPlayerPresenter } from "../presentation/localPlayerPresenter";
import { PresenterProvider } from "../presentation/presenterProvider";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ClientPresenterProvider implements PresenterProvider {
    forLocalPlayer(view: PlayerView, input: PlayerInput): void {
        new LocalPlayerPresenter(view, input, ClientProvider.serverConnection)
    }
    forPlayer(view: PlayerView): void {
        new ClientPlayerPresenter(view)
    }

    forGameplay(scene: GameScene): void {
        // new ClientGamePresenter()
    }

}