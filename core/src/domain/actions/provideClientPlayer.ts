import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { ClientProvider } from "../../clientProvider";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";

export function ProvideClientPlayer(info: PlayerInfo, state: PlayerState, scene: GameScene): Player {
    const view = new PhaserPlayerView(scene, state.position.x, state.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
    ClientProvider.presenterProvider.forPlayer(view)
    return new Player(info, state, view)
}