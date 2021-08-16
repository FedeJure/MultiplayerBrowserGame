import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";
import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { filter } from "rxjs";
import { PlayerStatesEvent } from "../infrastructure/events/gameEvents";
import { ValidateStateAction } from "../domain/actions/validatePosition";

export class LocalPlayerPresenter extends ClientPlayerPresenter {
  private readonly input: PlayerInput
  private readonly connection: ServerConnection
  private readonly player: Player
  private readonly resolveMovement: ResolvePlayerMovementWithInputs
  private readonly validateState: ValidateStateAction

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
    super(view);
    this.input = input;
    this.connection = connection;
    this.resolveMovement = resolveMovement
    this.validateState = validateState
    this.renderLocalPlayer();
    this.player = player
    view.onUpdate.subscribe(this.update.bind(this));
    view.onPreUpdate.subscribe(this.preUpdate.bind(this));

    this.connection.onPlayersStates
    .pipe(filter(state =>{
      console.log(state)
      return state.states.has(player.info.id)}))
    .subscribe(this.HandleStateEvent)
  }

  private HandleStateEvent(statesEvent: PlayerStatesEvent): void {
    const state = statesEvent.states.get(this.player.info.id)?.state;
    if (state) this.validateState.execute(this.player, state)
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
