import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { PlayerInfo } from "../player/playerInfo";
import { PlayerInput } from "../player/playerInput";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { PresenterProvider } from "../../presentation/presenterProvider";
import { ConnectedPlayersRepository } from "../../infrastructure/repositories/connectedPlayersRepository";
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { PlayerCollisionDelegator } from "../collisions/playerCollisionDelegator";
import { ClientProvider } from "../../infrastructure/providers/clientProvider";

export class CreateLocalClientPlayer {
  private readonly presenterProvider: PresenterProvider;
  private readonly connectedPlayersRepository: ConnectedPlayersRepository;
  private readonly playerStateRepository: PlayerStateRepository;
  constructor(
    presenterProvider: PresenterProvider,
    connectedPlayersRepository: ConnectedPlayersRepository,
    playerStateRepository: PlayerStateRepository
  ) {
    this.presenterProvider = presenterProvider;
    this.connectedPlayersRepository = connectedPlayersRepository;
    this.playerStateRepository = playerStateRepository;
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
    console.log(info);
    const player = new Player(
      info,
      state,
      view
    );
    scene.addToLifecycle(view);
    this.presenterProvider.forLocalPlayer(view, input, player);
    this.connectedPlayersRepository.savePlayer(info.id, player);
    this.playerStateRepository.setPlayerState(info.id, player.state);
  }
}
