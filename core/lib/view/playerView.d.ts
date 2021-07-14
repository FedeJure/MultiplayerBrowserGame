import { GameObjects, Scene } from "phaser";
import { Player } from "../domain/player";
export declare class PlayerView extends GameObjects.Container {
    readonly player: Player;
    constructor(scene: Scene, player: Player);
}
