import { ClientProvider } from "../clientProvider";
import { PlayerInput } from "../domain/playerInput";
import { Log } from "../infrastructure/Logger";
import { PlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {
    private input: PlayerInput
    constructor(player: PlayerView, input: PlayerInput) {
        super(player)
        this.input = input
        this.renderLocalPlayer()
        player.onUpdate.subscribe(this.update.bind(this))
        player.onPreUpdate.subscribe(this.preUpdate.bind(this))
    }

    renderLocalPlayer(): void {
        this.view.scene.cameras.main.startFollow(this.view)
    }

    preUpdate({time, delta} : {time: number, delta: number}) {
    }

    update({time, delta}: {time: number, delta:number}) {
        var newVelocity : {x:number, y: number} = { x: 0, y: 0 }
        var velocity = 1
        newVelocity.x += +this.input.right * velocity * delta
        newVelocity.x -= +this.input.left * velocity * delta
        newVelocity.y += +this.input.jump * velocity * delta
        if (newVelocity.x !== 0 || newVelocity.y !== 0) Log(this,`${newVelocity.x} - ${newVelocity.y}`)
        this.view.setVelocity(newVelocity.x, newVelocity.y)
    }

}