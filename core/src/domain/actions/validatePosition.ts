import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { PlayerFacade } from "../playerFacade";

export function ValidateState(player: PlayerFacade, remoteState: PlayerStateDto) {
    player.view.setVelocity(remoteState.velocity.x, remoteState.velocity.y)

    if (Math.abs(remoteState.velocity.x - player.view.body.velocity.x) > 1) {
        player.view.setVelocityX(remoteState.velocity.x)
    }
    if (Math.abs(remoteState.velocity.y - player.view.body.velocity.y) > 1) {
        player.view.setVelocityY(remoteState.velocity.x)
    }
    if (Math.abs(remoteState.position.x - player.view.body.position.x) > 1) {
        player.view.setPosition(remoteState.position.x, player.view.body.position.y)
    }
    if (Math.abs(remoteState.position.y - player.view.body.position.y) > 1) {
        player.view.setPosition(player.view.body.position.x, remoteState.position.y)
    }
}