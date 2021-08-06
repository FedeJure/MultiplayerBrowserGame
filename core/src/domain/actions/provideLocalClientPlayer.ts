import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { PlayerInput } from "../player/playerInput";
import { ClientProvider } from "../../clientProvider";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";

export function ProvideLocalClientPlayer(info: PlayerInfo, state: PlayerState, scene: GameScene, input: PlayerInput): Player {
    const view = new PhaserPlayerView(scene, state.position.x, state.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
    scene.addToLifecycle(view)
    ClientProvider.presenterProvider.forLocalPlayer(view, input)
    return new Player(info, state, view)
}