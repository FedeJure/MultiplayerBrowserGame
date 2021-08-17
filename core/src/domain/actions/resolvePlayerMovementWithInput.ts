import { PhaserPlayerView } from "../../view/playerView";
import { PlayerInput } from "../player/playerInput";
import { PlayerState } from "../player/playerState";

export class ResolvePlayerMovementWithInputs {
  constructor() {}

  execute(
    input: PlayerInput,
    view: PhaserPlayerView,
    state: PlayerState,
    deltaTime: number
  ): PlayerState {
    let newVelocity: { x: number; y: number } = view.body.velocity
    let velocity = 1
    let maxRunVelocity = 10
    let maxJumpVelocity = 5
    newVelocity.x += +input.right * velocity * deltaTime;
    newVelocity.x -= +input.left * velocity * deltaTime;
    let availableJumps = state.jumpsAvailable;
    let canJump = state.canJump;

    if (canJump && availableJumps > 0 && input.jump) {
      newVelocity.y = -10;
      availableJumps--;
      canJump = false;
    }

    if (!canJump && availableJumps > 0 && !input.jump) canJump = true;

    newVelocity.x =
      Math.sign(newVelocity.x) *
      Math.min(maxRunVelocity, Math.abs(newVelocity.x));
    return {
      ...state,
      velocity: newVelocity,
      jumpsAvailable: availableJumps,
      position: view.body.position,
      canJump,
    };
  }
}
