import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";
import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { ValidateStateAction } from "../domain/actions/validatePosition";
import { PlayerStateRepository } from "../infrastructure/repositories/playerStateRepository";
import { CollisionsDispatcher } from "../view/collisions/collisionsDispatcher";

export class LocalPlayerPresenter extends ClientPlayerPresenter {
  private readonly input: PlayerInput;
  private readonly resolveMovement: ResolvePlayerMovementWithInputs;
  private readonly playerStateRepository: PlayerStateRepository;
  private readonly collisionDispatcher: CollisionsDispatcher;

  private lastInputSended: string = "";
  private currentInput: PlayerInputDto | undefined;

  constructor(
    view: PhaserPlayerView,
    input: PlayerInput,
    connection: ServerConnection,
    resolveMovement: ResolvePlayerMovementWithInputs,
    player: Player,
    validateState: ValidateStateAction,
    playerStateRepository: PlayerStateRepository,
    collisionDispatcher: CollisionsDispatcher
  ) {
    super(view, connection, player, validateState);
    this.input = input;
    this.resolveMovement = resolveMovement;
    this.playerStateRepository = playerStateRepository;
    this.collisionDispatcher = collisionDispatcher;
    this.renderLocalPlayer();
    this.subscribeToCollisions();
    view.onUpdate.subscribe(this.update.bind(this));
    view.onPreUpdate.subscribe(this.preUpdate.bind(this));
  }
  subscribeToCollisions() {

    this.collisionDispatcher.subscribeToStartCollision(this.view.matterBody.id)
    .subscribe(col => {
      
      console.log("col", col)
    })
  }

  renderLocalPlayer(): void {
    this.view.scene.cameras.main.startFollow(this.view);
  }

  preUpdate({ time, delta }: { time: number; delta: number }) {}

  update({ time, delta }: { time: number; delta: number }) {
    const currentInput = this.input.toDto();
    this.currentInput = currentInput;
    if (this.inputHasChange()) {
      this.connection.emitInput(this.player.info.id, currentInput);
      const oldState = this.playerStateRepository.getPlayerState(
        this.player.info.id
      );
      if (oldState) {
        const newState = this.resolveMovement.execute(
          this.input,
          this.view,
          oldState,
          delta
        );
        this.view.setVelocity(newState.velocity.x, newState.velocity.y);
        this.playerStateRepository.setPlayerState(
          this.player.info.id,
          newState
        );
      }

      this.lastInputSended = JSON.stringify(currentInput);
    }
  }

  inputHasChange() {
    return (
      !this.lastInputSended ||
      JSON.stringify(this.currentInput) != this.lastInputSended
    );
  }
}
