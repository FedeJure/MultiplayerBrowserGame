import { resolvePlaterMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { PlayerInput } from "../domain/player/playerInput";
import { PhaserPlayerView } from "../view/playerView";

export class ServerPlayerPresenter {
  private readonly view: PhaserPlayerView;
  private readonly input: PlayerInput;
  constructor(player: PhaserPlayerView, input: PlayerInput) {
    this.view = player;
    this.input = input;
    player.onUpdate.subscribe(this.update.bind(this));
  }

  update({ time, delta }: { time: number; delta: number }) {
    const newVelocity = resolvePlaterMovementWithInputs(
      this.input,
      this.view,
      delta
    );
    this.view.setVelocity(newVelocity.x, newVelocity.y);
  }
}
