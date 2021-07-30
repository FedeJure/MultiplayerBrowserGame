import { Physics, Scene } from "phaser"
import { Provider } from "../coreProvider"
import { ClientPlayerPresenter } from "../presentation/clientPlayerPresenter"
import { LocalPlayerPresenter } from "../presentation/localPlayerPresenter"

export class PlayerView extends Physics.Matter.Sprite {
//TODO: ver de crear interfaces en el dominio con todas las propiedades q se usen de Phaser, para aislar 
// el core de la dependencia del framework

    readonly scene: Scene

    constructor(scene: Scene, x: number, y: number, height: number, width: number, local: boolean = false) {
        super(scene.matter.world, x, y, "")
        Provider.presenterProvider.forPlayer(this, local)
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
}