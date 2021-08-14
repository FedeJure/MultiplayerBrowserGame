import { PhaserPlayerView } from "../../view/playerView";
import { PlayerInput } from "../player/playerInput";

export class ResolvePlayerMovementWithInputs {
  constructor() {}

  execute(input: PlayerInput, view: PhaserPlayerView, deltaTime: number) {
    var newVelocity: { x: number; y: number } = view.body.velocity;
    var velocity = 1;
    var maxRunVelocity = 10;
    newVelocity.x += +input.right * velocity * deltaTime;
    newVelocity.x -= +input.left * velocity * deltaTime;
    newVelocity.y -= +input.jump * velocity * deltaTime;
    newVelocity.x =
      Math.sign(newVelocity.x) *
      Math.min(maxRunVelocity, Math.abs(newVelocity.x));
    return newVelocity;
  }
}
