import { PlayerView } from "./playerView";
import { RenderDelegator } from "./RenderDelegator";


export class PlayerRenderDelegator implements RenderDelegator {
    renderLocalPlayer(player: PlayerView): void {
        player.scene.cameras.main.startFollow(player)
    }

    renderPlayer(player: PlayerView): void {
        this.createAnimations(player)
        player.setTexture("player_anim")
        player.anims.play("idle")
        player.scene.add.existing(player)
        console.log(player)
    }

    createAnimations(player: PlayerView) {
        if (!player.scene.anims.exists("idle")) player.scene.anims.create({
            key: "idle",
            frames: player.scene.anims.generateFrameNumbers("player_anim", { start: 0, end: 2 }),
            frameRate: 5,
            repeat: -1
        });
    }

}