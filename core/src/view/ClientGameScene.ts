import { Player } from "../domain/player";
import { GameScene } from "./GameScene";
import * as GameSceneConfig from "./GameSceneConfig.json"
import { PlayerView } from "./playerView";

export class ClientGameScene extends GameScene {
    
    preload() {
        GameSceneConfig.assets.spritesheets.forEach(image => {
            this.load.spritesheet(image.name, image.path, image)
        })
        GameSceneConfig.assets.images.forEach(image => {
            this.load.image(image.name, image.path)
        })
    }
    
    public create = () => {
        const background = this.add.image(1250, 300, "background");
        background.height = 600;
        background.scaleY = 2;
        background.scaleX = 2;
    }

    // addPlayers(players: Array<Player>) {
    //     super.addPlayers(players)

    //     players.forEach((player : Player) => {
    //         console.log(player)
    //         const view : PlayerView | undefined = this.playerViewRepository.getPlayer(player.playerInfo.id)
    //         if (view != undefined){
    //             const sprite = new Phaser.Physics.Arcade.Sprite(this, 0, 0, "player")
    //             sprite.setOrigin(0.5, 0.5);
    //             sprite.scaleX = 1;
    //             sprite.scaleY = 1;
    //             view.add(sprite)
    //             this.add.existing(sprite)
    //             this.cameras.main.startFollow(view);
    //             this.cameras.main.zoom = 1.1;
    //         }

                
    //     })
    // }

}