import { PlayerStateDto } from "../../infrastructure/dtos/playerStateDTO";
import { PlayerFacade } from "../playerFacade";

export function ValidateState(player: PlayerFacade, remoteState: PlayerStateDto) {
    const posLimit = 1
    const velLimit = 3
    if (Math.abs(remoteState.velocity.x - player.view.body.velocity.x) > velLimit) {
        player.view.setVelocityX(remoteState.velocity.x)
    }
    if (Math.abs(remoteState.velocity.y - player.view.body.velocity.y) > velLimit) {
        player.view.setVelocityY(remoteState.velocity.x)
    }
    if (Math.abs(remoteState.position.x - player.view.body.position.x) > posLimit) {
        player.view.setPosition(remoteState.position.x, player.view.body.position.y)
    }
    if (Math.abs(remoteState.position.y - player.view.body.position.y) > posLimit) {
        player.view.setPosition(player.view.body.position.x, remoteState.position.y)
    }
}