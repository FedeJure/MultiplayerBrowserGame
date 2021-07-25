import { GameObjects, Physics, Scene } from "phaser"
import { Player } from "../domain/player";
import { Position } from "../domain/position";
import { RenderDelegator } from "./RenderDelegator";

export class PlayerView extends GameObjects.Container {
//TODO: ver de crear interfaces en el dominio con todas las propiedades q se usen de Phaser, para aislar 
// el core de la dependencia del framework

    readonly render: RenderDelegator

    constructor(scene: Scene, x: number, y: number, renderDelegator: RenderDelegator) {
        super(scene, x, y)
        scene.physics.add.existing(this)
        scene.add.existing(this)
        this.render = renderDelegator
        this.render.renderPlayer(this)
    }
}