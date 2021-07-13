import { GameObjects, Scene } from "phaser"
import { Player } from "./player";

export class PlayerView extends GameObjects.Container {

    public readonly player: Player

    constructor(scene: Scene, player: Player) {
        super(scene, player.state.x, player.state.y)
        this.player = player
        this.body.gameObject?.setDrag(100);
        this.body.gameObject?.setAngularDrag(100);
        this.body.gameObject?.setCollideWorldBounds(false); 
    }
}