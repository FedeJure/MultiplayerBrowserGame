import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { PresenterProvider } from "../../presentation/presenterProvider";
import { ConnectedPlayersRepository } from "../../infrastructure/repositories/connectedPlayersRepository";
import { PlayerCollisionDelegator } from "../collisions/playerCollisionDelegator";
import { ClientProvider } from "../../infrastructure/providers/clientProvider";

export class CreateClientPlayerAction {
  private readonly presenterProvider: PresenterProvider;
  private readonly connectedPlayersRepository: ConnectedPlayersRepository;
  constructor(
    presenterProvider: PresenterProvider,
    connectedPlayersRepository: ConnectedPlayersRepository
  ) {
    this.presenterProvider = presenterProvider;
    this.connectedPlayersRepository = connectedPlayersRepository;
  }

  public execute(info: PlayerInfo, state: PlayerState, scene: GameScene) {
    const view = new PhaserPlayerView(
      scene,
      state.position.x,
      state.position.y,
      DefaultConfiguration.height,
      DefaultConfiguration.width
    );
    const player = new Player(
      info,
      state,
      view
    );
    this.presenterProvider.forPlayer(view, player);
    this.connectedPlayersRepository.savePlayer(info.id, player);
  }
}
