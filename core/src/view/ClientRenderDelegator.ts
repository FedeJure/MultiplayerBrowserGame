import { Cameras } from "phaser";
import { GameScene } from "./GameScene";
import { PlayerView } from "./playerView";
import { RenderDelegator } from "./RenderDelegator";


export class ClientRenderDelegator implements RenderDelegator {
    renderLocalPlayer(player: PlayerView): void {
        player.scene.cameras.main.startFollow(player)
    }

    renderPlayer(player: PlayerView): void {
        const sprite = new Phaser.Physics.Arcade.Sprite(player.scene, player.body.position.x, player.body.position.y, "player")
        sprite.setOrigin(0.5, 0.5);
        sprite.scaleX = 1;
        sprite.scaleY = 1;
        player.add(sprite);
        player.scene.add.existing(sprite)        
        // sprite.anims.play('idle')
    }

}