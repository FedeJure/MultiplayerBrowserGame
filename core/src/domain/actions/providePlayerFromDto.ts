import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { GameScene } from "../../view/GameScene";
import { PlayerView } from "../../view/playerView";
import { RenderDelegator } from "../../view/RenderDelegator";
import { PlayerFacade } from "../playerFacade";
import { PlayerInfo } from "../playerInfo";

export function ProvidePlayerFromDto(dto: PlayerStateDto, scene: GameScene, render: RenderDelegator): PlayerFacade {
    const view = new PlayerView(scene, dto.position.x, dto.position.y, render)
    const info : PlayerInfo = {
        name: dto.name,
        id: dto.id
    }
    return { view, info }
}