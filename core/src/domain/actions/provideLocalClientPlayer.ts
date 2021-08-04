import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { PlayerInput } from "../player/playerInput";
import { ClientProvider } from "../../clientProvider";
import { PlayerFacade } from "../../view/playerFacade";

export function ProvideLocalClientPlayer(state: PlayerStateDto, scene: GameScene, input: PlayerInput): PlayerFacade {
    const view = new PhaserPlayerView(scene, state.position.x, state.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
    const info : PlayerInfo = {
        name: state.name,
        id: state.id
    }
    ClientProvider.presenterProvider.forLocalPlayer(view, input)
    return { view, info, state}
}