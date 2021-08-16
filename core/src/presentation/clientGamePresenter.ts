import { GameScene } from "../view/scenes/GameScene";
import { CreateClientPlayerAction } from "../domain/actions/provideClientPlayer";
import { CreateLocalClientPlayer } from "../domain/actions/provideLocalClientPlayer";
import { ServerConnection } from "../domain/serverConnection";
import { ValidateStateAction } from "../domain/actions/validatePosition";
import { Log } from "../infrastructure/Logger";
import { PlayerKeyBoardInput } from "../infrastructure/input/playerKeyboardInput";
import { ConnectedPlayersRepository } from "../infrastructure/repositories/connectedPlayersRepository";

export class ClientGamePresenter {
  readonly connection: ServerConnection
  readonly scene: GameScene
  readonly localPlayerId: string
  readonly createClientPlayerAction: CreateClientPlayerAction
  readonly createLocalPlayerAction: CreateLocalClientPlayer
  readonly validateStateAction: ValidateStateAction
  readonly playersRepository: ConnectedPlayersRepository

  constructor(
    localPlayerId: string,
    connection: ServerConnection,
    scene: GameScene,
    createClientPlayer: CreateClientPlayerAction,
    createLocalPlayer: CreateLocalClientPlayer,
    validateState: ValidateStateAction,
    playersRepository: ConnectedPlayersRepository
  ) {
    this.connection = connection;
    this.scene = scene;
    this.localPlayerId = localPlayerId;
    this.createClientPlayerAction = createClientPlayer;
    this.createLocalPlayerAction = createLocalPlayer;
    this.validateStateAction = validateState
    this.playersRepository = playersRepository
    scene.onCreate.subscribe(() => {
      this.listenEvents();
      connection.emitStartNewConnection(localPlayerId);
    });
  }

  listenEvents() {
    this.connection.onInitialGameState.subscribe((data) => {
      Log(this, "Initial Game State Event", data);
      data.players.forEach((dto) => {
        if (dto.id === this.localPlayerId)
          this.createLocalPlayerAction.execute(
            dto.info,
            dto.state,
            this.scene,
            new PlayerKeyBoardInput(this.scene.input.keyboard)
          );
        else
          this.createClientPlayerAction.execute(
            dto.info,
            dto.state,
            this.scene
          );
      });

      // this.connection.onPlayersStates.subscribe((data) => {
      //   data.states.forEach((p) => {
      //     const player = this.playersRepository.getPlayer(p.id);
      //     if (player) this.validateStateAction.execute(player, p.state);
      //   });
      // });

      this.connection.onNewPlayerConnected.subscribe((data) => {
        if (this.playersRepository.getPlayer(data.player.id)) return;
        this.createClientPlayerAction.execute(
          data.player.info,
          data.player.state,
          this.scene
        );
      });

      this.connection.onPlayerDisconnected.subscribe((data) => {
        const player = this.playersRepository.getPlayer(data.playerId);
        if (!player) return;
        player.view.destroy();
        this.playersRepository.removePlayer(data.playerId);
      });
    });
  }
}
