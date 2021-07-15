import { GameScene } from "./GameScene";

export class ClientGameScene extends GameScene {
    create() {
        super.create()
        this.setupPlayerImages();
    }

    setupPlayerImages() {
        console.log("Setupping player images!")
    }
}