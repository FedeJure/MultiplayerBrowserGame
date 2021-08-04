import { PlayerInput } from "../domain/player/playerInput"
import { PhaserPlayerView } from "../view/playerView"

export class ClientPlayerPresenter  {

    protected view: PhaserPlayerView
    

    constructor(player: PhaserPlayerView) {
        this.view = player
        this.createAnimations(player)
        this.renderPlayer(player)
    }


    private renderPlayer(player: PhaserPlayerView): void {
        this.createAnimations(player)
        player.setTexture("player_anim")
        player.anims.play("idle")
        player.scene.add.existing(player)
    }

    private createAnimations(player: PhaserPlayerView) {
        if (!player.scene.anims.exists("idle")) player.scene.anims.create({
            key: "idle",
            frames: player.scene.anims.generateFrameNumbers("player_anim", { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
    }

}