import { Physics, Scene } from "phaser"
import { Observable, Subject } from "rxjs"
import { Provider } from "../coreProvider"
import { PlayerInput } from "../domain/playerInput"
import { ClientPlayerPresenter } from "../presentation/clientPlayerPresenter"
import { LocalPlayerPresenter } from "../presentation/localPlayerPresenter"

export class PlayerView extends Physics.Matter.Sprite {
//TODO: ver de crear interfaces en el dominio con todas las propiedades q se usen de Phaser, para aislar 
// el core de la dependencia del framework

    readonly scene: Scene
    private readonly _onUpdate = new Subject<{time: number, delta: number}>()

    constructor(scene: Scene, x: number, y: number, height: number, width: number, local: boolean = false, input?: PlayerInput) {
        super(scene.matter.world, x, y, "")
        Provider.presenterProvider.forPlayer(this, local, input)
        this.height = height
        this.width = width
        this.setBounce(0)
        this.scene = scene
        scene.matter.world.add(this)
    }

    destroy() {
        super.destroy()
        this.scene?.matter.world.remove(this)
    }

    update(time: number, delta: number) {
        this._onUpdate.next({time, delta})
    }

    public get onUpdate() : Observable<{time:number, delta:number}> { return this._onUpdate }
}