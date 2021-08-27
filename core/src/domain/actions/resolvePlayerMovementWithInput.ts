import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInput } from "../player/playerInput";
import { PlayerState } from "../player/playerState";

export class ResolvePlayerMovementWithInputs {
  constructor() { }

  execute(
    input: PlayerInput,
    view: PhaserPlayerView,
    state: PlayerState,
    deltaTime: number
  ): PlayerState {
    let newVelocity: { x: number; y: number } = view.body.velocity
    let velocity = 1
    let maxRunVelocity = 5

    let availableJumps = state.grounded ? DefaultConfiguration.initialJumps : state.jumpsAvailable;
    let canJump = state.canJump;
    let jumping = false

    if (canJump && availableJumps > 0 && input.jump) {
      newVelocity.y = -5;
      availableJumps--;
      canJump = false;
      jumping = true
    }

    if (!canJump && availableJumps > 0 && !input.jump) canJump = true;

    if ((state.grounded && (input.left || input.right)) || jumping) {
      newVelocity.x += +input.right * velocity * deltaTime;
      newVelocity.x -= +input.left * velocity * deltaTime;
      newVelocity.x =
        Math.sign(newVelocity.x) *
        Math.min(maxRunVelocity, Math.abs(newVelocity.x));
    }
    if (state.grounded && !input.left && !input.right){
      newVelocity = { x: 0, y:  newVelocity.y}
    }
       

    return {
      ...state,
      velocity: newVelocity,
      jumpsAvailable: availableJumps,
      position: view.body.position,
      canJump,
    };
  }

  processJump() {

  }
}
