import { ClientProvider } from "../clientProvider";
import { PlayerInput } from "../domain/player/playerInput";
import { ClientPlayerPresenter } from "../presentation/clientPlayerPresenter";
import { LocalPlayerPresenter } from "../presentation/localPlayerPresenter";
import { PresenterProvider } from "../presentation/presenterProvider";
import { PhaserPlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ClientPresenterProvider implements PresenterProvider {
    forLocalPlayer(view: PhaserPlayerView, input: PlayerInput): void {
        new LocalPlayerPresenter(view, input, ClientProvider.serverConnection)
    }
    forPlayer(view: PhaserPlayerView): void {
        new ClientPlayerPresenter(view)
    }

    forGameplay(scene: GameScene): void {
        // new ClientGamePresenter()
    }

}