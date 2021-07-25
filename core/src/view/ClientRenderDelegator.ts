import { Cameras } from "phaser";
import { GameScene } from "./GameScene";
import { PlayerView } from "./playerView";
import { RenderDelegator } from "./RenderDelegator";


export class ClientRenderDelegator implements RenderDelegator {

    renderPlayer(player: PlayerView): void {
        player.scene.cameras.main.startFollow(player)
        const sprite = new Phaser.Physics.Arcade.Sprite(player.scene, 0, 0, "player")
        sprite.setOrigin(0.5, 0.5);
        sprite.scaleX = 1;
        sprite.scaleY = 1;
        player.add(sprite);
        player.scene.add.existing(sprite)        
        sprite.anims.play('idle')
    }

}