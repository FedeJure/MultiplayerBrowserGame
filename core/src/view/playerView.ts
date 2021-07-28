import { GameObjects, Physics, Scene } from "phaser"
import { Player } from "../domain/player";
import { Position } from "../domain/position";
import { RenderDelegator } from "./RenderDelegator";

export class PlayerView extends Physics.Matter.Sprite {
//TODO: ver de crear interfaces en el dominio con todas las propiedades q se usen de Phaser, para aislar 
// el core de la dependencia del framework

    readonly render: RenderDelegator

    constructor(scene: Scene, x: number, y: number, height: number, width: number, renderDelegator: RenderDelegator) {
        super(scene.matter.world, x, y, "")
        this.setBounce(0)
        scene.matter.world.add(this)  
        this.render = renderDelegator
        this.render.renderPlayer(this)
      
    }
}