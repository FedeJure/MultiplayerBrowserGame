import { GameScene } from "./scenes/GameScene";
import { PlayerView } from "./playerView";
import { RenderDelegator } from "./RenderDelegator"

export class ServerRenderDelegator implements RenderDelegator {
    renderLocalPlayer(localPlayer: PlayerView): void {
        throw new Error("Method not implemented.");
    }
    
    renderPlayer(player: PlayerView) {}

}