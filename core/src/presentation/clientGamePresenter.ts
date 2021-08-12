import { GameScene } from "../view/scenes/GameScene";
import { ProvideClientPlayer } from "../domain/actions/provideClientPlayer";
import { ProvideLocalClientPlayer } from "../domain/actions/provideLocalClientPlayer";
import { ServerConnection } from "../domain/serverConnection";
import { ValidateState } from "../domain/actions/validatePosition";
import { Log } from "../infrastructure/Logger";
import { PlayerKeyBoardInput } from "../infrastructure/input/playerKeyboardInput";
import { ClientProvider } from "../infrastructure/providers/clientProvider";
import { Player } from "../domain/player/player";

export class ClientGamePresenter {
  readonly connection: ServerConnection;
  readonly scene: GameScene;
  readonly localPlayerId: string;

  constructor(
    localPlayerId: string,
    connection: ServerConnection,
    scene: GameScene
  ) {
    this.connection = connection;
    this.scene = scene;
    this.localPlayerId = localPlayerId;
    scene.onCreate.subscribe(() => {
      this.listenEvents();
      connection.emitStartNewConnection(localPlayerId);
    });
  }

  listenEvents() {
    this.connection.onInitialGameState.subscribe((data) => {
      Log(this, "Initial Game State Event", data);
      const players = data.players.map((dto) => {
        var player: Player;
        if (dto.id === this.localPlayerId)
          player = ProvideLocalClientPlayer(
            dto.info,
            dto.state,
            this.scene,
            new PlayerKeyBoardInput(this.scene.input.keyboard)
          );
        else player = ProvideClientPlayer(dto.info, dto.state, this.scene);
        ClientProvider.connectedPlayers.savePlayer(player.info.id, player);
        return player;
      });

      this.connection.onPlayersStates.subscribe((data) => {
        data.states.forEach((p) => {
          const player = ClientProvider.connectedPlayers.getPlayer(p.id);
          if (player) ValidateState(player, p.state);
        });
      });

      this.connection.onNewPlayerConnected.subscribe((data) => {
        if (ClientProvider.connectedPlayers.getPlayer(data.player.id)) return;
        const player = ProvideClientPlayer(
          data.player.info,
          data.player.state,
          this.scene
        );
        ClientProvider.connectedPlayers.savePlayer(player.info.id, player);
      });

      this.connection.onPlayerDisconnected.subscribe((data) => {
        const player = ClientProvider.connectedPlayers.getPlayer(data.playerId);
        if (!player) return;
        player.view.destroy();
        ClientProvider.connectedPlayers.removePlayer(data.playerId);
      });
    });
  }

  private get localPlayer() {
    return ClientProvider.connectedPlayers.getPlayer(this.localPlayerId);
  }
}
