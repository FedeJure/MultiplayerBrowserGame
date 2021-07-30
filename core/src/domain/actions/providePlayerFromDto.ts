import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { GameScene } from "../../view/scenes/GameScene";
import { PlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../playerConfiguration";
import { PlayerFacade } from "../playerFacade";
import { PlayerInfo } from "../playerInfo";
import { PlayerInput } from "../playerInput";

export function ProvidePlayerFromDto(dto: PlayerStateDto, scene: GameScene, local: boolean = false, input?: PlayerInput): PlayerFacade {
    const view = new PlayerView(scene, dto.position.x, dto.position.y, DefaultConfiguration.height, DefaultConfiguration.width, local, input)
    const info : PlayerInfo = {
        name: dto.name,
        id: dto.id
    }
    return { view, info }
}