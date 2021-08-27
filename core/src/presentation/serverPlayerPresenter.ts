import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { Delegator } from "../domain/delegator";
import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { PlayerStateRepository } from "../infrastructure/repositories/playerStateRepository";

export class ServerPlayerPresenter {
  private readonly player: Player
  private readonly input: PlayerInput
  private readonly resolveMovement: ResolvePlayerMovementWithInputs
  private readonly playerStates: PlayerStateRepository
  private readonly delegators: Delegator[]
  constructor(
    player: Player,
    input: PlayerInput,
    resolveMovement: ResolvePlayerMovementWithInputs,
    playerStates: PlayerStateRepository,
    delegators: Delegator[]) {
    this.player = player
    this.input = input
    this.resolveMovement = resolveMovement
    this.playerStates = playerStates
    this.delegators = delegators
    player.view.onUpdate.subscribe(this.update.bind(this));
    this.delegators.forEach(d => d.init())
  }

  update({ time, delta }: { time: number; delta: number }) {
    const oldState = this.playerStates.getPlayerState(this.player.info.id)
    if (oldState) {
      const newState = this.resolveMovement.execute(
        this.input,
        this.player.view,
        oldState,
        delta
      );
      this.playerStates.setPlayerState(this.player.info.id, newState)
      this.player.view.setVelocity(newState.velocity.x, newState.velocity.y);
    }
    
    
  }
}
