import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { PlayerInfo } from "../domain/player/playerInfo";
import { PlayerInput } from "../domain/player/playerInput";
import { PlayerStateRepository } from "../infrastructure/repositories/playerStateRepository";
import { PhaserPlayerView } from "../view/playerView";

export class ServerPlayerPresenter {
  private readonly view: PhaserPlayerView
  private readonly input: PlayerInput
  private readonly resolveMovement: ResolvePlayerMovementWithInputs
  private readonly playerStates: PlayerStateRepository
  private readonly info: PlayerInfo
  constructor(player: PhaserPlayerView,
    info: PlayerInfo,
    input: PlayerInput,
    resolveMovement: ResolvePlayerMovementWithInputs,
    playerStates: PlayerStateRepository) {
    this.view = player
    this.input = input
    this.info = info
    this.resolveMovement = resolveMovement
    this.playerStates = playerStates
    player.onUpdate.subscribe(this.update.bind(this));
  }

  update({ time, delta }: { time: number; delta: number }) {
    const oldState = this.playerStates.getPlayerState(this.info.id)
    if (oldState) {
      const newState = this.resolveMovement.execute(
        this.input,
        this.view,
        oldState,
        delta
      );
      this.playerStates.setPlayerState(this.info.id, newState)
      this.view.setVelocity(newState.velocity.x, newState.velocity.y);
    }
    
    
  }
}
