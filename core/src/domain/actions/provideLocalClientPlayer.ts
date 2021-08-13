import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { PlayerInput } from "../player/playerInput";
import { ClientProvider } from "../../infrastructure/providers/clientProvider";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { PresenterProvider } from "../../presentation/presenterProvider";
import { ConnectedPlayersRepository } from "../../infrastructure/repositories/connectedPlayersRepository";

export function ProvideLocalClientPlayer(
  info: PlayerInfo,
  state: PlayerState,
  scene: GameScene,
  input: PlayerInput
): Player {
  const view = new PhaserPlayerView(
    scene,
    state.position.x,
    state.position.y,
    DefaultConfiguration.height,
    DefaultConfiguration.width
  );
  const player = new Player(info, state, view);
  scene.addToLifecycle(view);
  ClientProvider.presenterProvider.forLocalPlayer(view, input);
  return player;
}

export class CreateLocalClientPlayer {
  private readonly presenterProvider: PresenterProvider;
  private readonly connectedPlayersRepository: ConnectedPlayersRepository;
  constructor(
    presenterProvider: PresenterProvider,
    connectedPlayersRepository: ConnectedPlayersRepository
  ) {
    this.presenterProvider = presenterProvider;
    this.connectedPlayersRepository = connectedPlayersRepository;
  }

  public execute(
    info: PlayerInfo,
    state: PlayerState,
    scene: GameScene,
    input: PlayerInput
  ) {
    const view = new PhaserPlayerView(
      scene,
      state.position.x,
      state.position.y,
      DefaultConfiguration.height,
      DefaultConfiguration.width
    );
    const player = new Player(info, state, view);
    scene.addToLifecycle(view);
    this.presenterProvider.forLocalPlayer(view, input);
    this.connectedPlayersRepository.savePlayer(info.id, player);
  }
}
