import { PlayerView } from "./playerView";
import { RenderDelegator } from "./RenderDelegator";


export class ClientRenderDelegator implements RenderDelegator {
    renderLocalPlayer(player: PlayerView): void {
        player.scene.cameras.main.startFollow(player)
    }

    renderPlayer(player: PlayerView): void {
        this.createAnimations(player)
        const sprite = new Phaser.Physics.Arcade.Sprite(player.scene, player.width / 2, player.height/ 2, "player_anim")
        sprite.setOrigin(1, 1);
        sprite.height = player.height
        sprite.width = player.width
        sprite.scaleX = 1;
        sprite.scaleY = 1;
        player.add(sprite);
        player.scene.add.existing(player)
        sprite.play("idle")
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