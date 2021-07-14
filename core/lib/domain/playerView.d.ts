import { GameObjects, Scene } from "phaser";
import { Player } from "./player";
export declare class PlayerView extends GameObjects.Container {
    readonly player: Player;
    constructor(scene: Scene, player: Player);
}
