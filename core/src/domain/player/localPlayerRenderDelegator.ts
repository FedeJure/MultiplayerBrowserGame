import { Delegator } from "../delegator"
import { Player } from "./player"

export class LocalPlayerRenderDelegator implements Delegator {
    private readonly player: Player
    constructor(player: Player) {
        this.player = player
    }
    init(): void {
        this.player.view.scene.cameras.main.startFollow(this.player.view);
    }
    stop(): void {
    }
    update(time: number, delta: number): void {
    }

}