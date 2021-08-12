import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { ClientProvider } from "../../infrastructure/providers/clientProvider";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { PresenterProvider } from "../../presentation/presenterProvider";
import { ConnectedPlayersRepository } from "../../infrastructure/repositories/connectedPlayersRepository";

export function ProvideClientPlayer(
  info: PlayerInfo,
  state: PlayerState,
  scene: GameScene
): Player {
  const view = new PhaserPlayerView(
    scene,
    state.position.x,
    state.position.y,
    DefaultConfiguration.height,
    DefaultConfiguration.width
  );
  ClientProvider.presenterProvider.forPlayer(view);
  return new Player(info, state, view);
}

export class CreateClientPlayerAction {
  readonly presenterProvider: PresenterProvider;
  readonly connectedPlayersRepository: ConnectedPlayersRepository;
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
    this.presenterProvider.forPlayer(view);
    const player = new Player(info, state, view);
    this.connectedPlayersRepository.savePlayer(info.id, player);
  }
}
