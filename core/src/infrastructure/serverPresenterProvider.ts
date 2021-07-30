import { PresenterProvider } from "../presentation/presenterProvider";
import { PlayerView } from "../view/playerView";
import { GameScene } from "../view/scenes/GameScene";

export class ServerPresenterProvider implements PresenterProvider {
    forPlayer(view: PlayerView, local: boolean = false): void {
        //nothing
    }

    forGameplay(scene: GameScene): void {
        // new ServerGamePresenter()
    }

}