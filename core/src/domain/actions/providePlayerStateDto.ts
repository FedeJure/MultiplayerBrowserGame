import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { Player } from "../player";

export function ProvidePlayerStateDto(player: Player) : PlayerStateDto {
    return {
        id: player.info.id,
        name: player.info.name,
        position: player.view.body.position,
        velocity: player.view.body.velocity,
        life: player.state.life
    }
}