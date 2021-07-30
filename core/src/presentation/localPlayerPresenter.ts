import { PlayerInput } from "../domain/playerInput";
import { PlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {
    private input: PlayerInput
    constructor(player: PlayerView, input: PlayerInput) {
        super(player)
        this.input = input
        this.renderLocalPlayer()
        player.onUpdate.subscribe(this.update.bind(this))
    }

    renderLocalPlayer(): void {
        this.view.scene.cameras.main.startFollow(this.view)
    }

    update({time, delta}: {time: number, delta:number}) {
    }

}