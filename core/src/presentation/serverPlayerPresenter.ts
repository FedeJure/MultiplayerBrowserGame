import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { PlayerInfo } from "../domain/player/playerInfo";
import { PlayerInput } from "../domain/player/playerInput";
import { PhaserPlayerView } from "../view/playerView";

export class ServerPlayerPresenter {
  private readonly view: PhaserPlayerView
  private readonly input: PlayerInput
  private readonly resolveMovement: ResolvePlayerMovementWithInputs
  constructor(player: PhaserPlayerView, info: PlayerInfo, input: PlayerInput, resolveMovement: ResolvePlayerMovementWithInputs) {
    this.view = player
    this.input = input
    this.resolveMovement = resolveMovement
    player.onUpdate.subscribe(this.update.bind(this));
  }

  update({ time, delta }: { time: number; delta: number }) {
    const newVelocity = this.resolveMovement.execute(
      this.input,
      this.view,
      delta
    );
    this.view.setVelocity(newVelocity.x, newVelocity.y);
  }
}
