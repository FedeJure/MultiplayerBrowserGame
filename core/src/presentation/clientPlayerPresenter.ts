import { PlayerView } from "../view/playerView"

export class ClientPlayerPresenter  {

    protected view: PlayerView

    constructor(player: PlayerView) {
        this.view = player
        this.createAnimations(player)
        this.renderPlayer(player)
    }


    private renderPlayer(player: PlayerView): void {
        this.createAnimations(player)
        player.setTexture("player_anim")
        player.anims.play("idle")
        player.scene.add.existing(player)
    }

    private createAnimations(player: PlayerView) {
        if (!player.scene.anims.exists("idle")) player.scene.anims.create({
            key: "idle",
            frames: player.scene.anims.generateFrameNumbers("player_anim", { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
    }

}