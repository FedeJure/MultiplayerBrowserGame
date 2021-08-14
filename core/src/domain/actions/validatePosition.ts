import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";

export class ValidateStateAction {
  constructor() {}

  execute(player: Player, remoteState: PlayerState) {
    const posLimit = 1;
    const velLimit = 3;
    if (
      Math.abs(remoteState.velocity.x - player.view.body.velocity.x) > velLimit
    ) {
      player.view.setVelocity(
        remoteState.velocity.x,
        player.view.body.velocity.y
      );
    }
    if (
      Math.abs(remoteState.velocity.y - player.view.body.velocity.y) > velLimit
    ) {
      player.view.setVelocity(
        player.view.body.velocity.x,
        remoteState.velocity.y
      );
    }
    if (
      Math.abs(remoteState.position.x - player.view.body.position.x) > posLimit
    ) {
      player.view.setPosition(
        remoteState.position.x,
        player.view.body.position.y
      );
    }
    if (
      Math.abs(remoteState.position.y - player.view.body.position.y) > posLimit
    ) {
      player.view.setPosition(
        player.view.body.position.x,
        remoteState.position.y
      );
    }
  }
}
