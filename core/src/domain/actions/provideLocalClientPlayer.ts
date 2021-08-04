import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { GameScene } from "../../view/scenes/GameScene";
import { PlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../playerConfiguration";
import { PlayerFacade } from "../playerFacade";
import { PlayerInfo } from "../playerInfo";
import { PlayerInput } from "../playerInput";
import { ClientProvider } from "../../clientProvider";

export function ProvideLocalClientPlayer(dto: PlayerStateDto, scene: GameScene, input: PlayerInput): PlayerFacade {
    const view = new PlayerView(scene, dto.position.x, dto.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
    const info : PlayerInfo = {
        name: dto.name,
        id: dto.id
    }
    ClientProvider.presenterProvider.forLocalPlayer(view, input)
    return { view, info }
}