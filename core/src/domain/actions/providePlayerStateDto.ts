import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { Player } from "../player";

export function ProvidePlayerStateDto(player: Player) : PlayerStateDto {
    return {
        id: player.info.id,
        name: player.info.name,
        position: { x: player.view.x, y: player.view.y },
        velocity: player.view.body.velocity,
        life: player.state.life,
        jumpsAvailable: player.state.jumpsAvailable,
        inInertia: player.state.inInertia,
        canMove: player.state.canMove
    }
}