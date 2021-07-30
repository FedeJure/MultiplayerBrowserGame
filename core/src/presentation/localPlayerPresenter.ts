import { PlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {

    constructor(player: PlayerView) {
        super(player) 
    }

    renderLocalPlayer(): void {
        this.view.scene.cameras.main.startFollow(this.view)
    }

}