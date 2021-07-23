import { GameObjects, Scene } from "phaser"
import { Player } from "../domain/player";
import { Position } from "../domain/position";

export class PlayerView extends GameObjects.Container {

    public readonly player: Player

    constructor(scene: Scene, player: Player) {
        super(scene, player.state.position.x, player.state.position.y)
        this.player = player
        // this.body.gameObject.setDrag(100)
        // this.body.gameObject.setAngularDrag(100)
        // this.body.gameObject.setCollideWorldBounds(false)
    }
}