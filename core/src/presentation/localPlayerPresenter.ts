import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";
import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { ValidateStateAction } from "../domain/actions/validatePosition";

export class LocalPlayerPresenter extends ClientPlayerPresenter {
  private readonly input: PlayerInput
  private readonly resolveMovement: ResolvePlayerMovementWithInputs

  private lastInputSended: string = ""
  private currentInput: PlayerInputDto | undefined

  constructor(
    view: PhaserPlayerView,
    input: PlayerInput,
    connection: ServerConnection,
    resolveMovement: ResolvePlayerMovementWithInputs,
    player: Player,
    validateState: ValidateStateAction
  ) {
    super(view, connection, player, validateState);
    this.input = input;
    this.resolveMovement = resolveMovement
    this.renderLocalPlayer();
    view.onUpdate.subscribe(this.update.bind(this));
    view.onPreUpdate.subscribe(this.preUpdate.bind(this));
  }

  renderLocalPlayer(): void {
    this.view.scene.cameras.main.startFollow(this.view);
  }

  preUpdate({ time, delta }: { time: number; delta: number }) {}

  update({ time, delta }: { time: number; delta: number }) {
    const currentInput = this.input.toDto();
    this.currentInput = currentInput;
    if (this.inputHasChange()) {
      this.connection.emitInput(
        this.player.info.id,
        currentInput
      );
      const newVelocity = this.resolveMovement.execute(
        this.input,
        this.view,
        delta
      );
      this.view.setVelocity(newVelocity.x, newVelocity.y);
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
