import { ClientProvider } from "../infrastructure/providers/clientProvider";
import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";
import { ResolvePlayerMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";

export class LocalPlayerPresenter extends ClientPlayerPresenter {
  private input: PlayerInput
  private connection: ServerConnection
  private player: Player | undefined
  private lastInputSended: string = ""
  private currentInput: PlayerInputDto | undefined
  private readonly resolveMovement: ResolvePlayerMovementWithInputs

  constructor(
    view: PhaserPlayerView,
    input: PlayerInput,
    connection: ServerConnection,
    resolveMovement: ResolvePlayerMovementWithInputs
  ) {
    super(view);
    this.input = input;
    this.connection = connection;
    this.resolveMovement = resolveMovement
    this.renderLocalPlayer();
    console.log(ClientProvider.connectedPlayers);
    this.player = ClientProvider.connectedPlayers.getPlayer(
      ClientProvider.localPlayerRepository.playerId
    );

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
        ClientProvider.localPlayerRepository.playerId,
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
