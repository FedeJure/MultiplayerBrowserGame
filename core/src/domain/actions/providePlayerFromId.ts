import { Player } from "../../domain/player/player";
import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { ServerProvider } from "../../infrastructure/providers/serverProvider";
import { ClientConnection } from "../clientConnection";
import { PlayerSocketInput } from "../../infrastructure/input/playerSocketInput";
import { PlayerInfoRepository } from "../../infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { ConnectedPlayersRepository } from "../../infrastructure/repositories/connectedPlayersRepository";
import { ServerPresenterProvider } from "../../infrastructure/providers/serverPresenterProvider";

export function ProvidePlayerFromId(
  playerId: string,
  scene: GameScene,
  connection: ClientConnection
): Player {
  const playerInfo = ServerProvider.playerInfoRepository.getPlayer(playerId);
  if (playerInfo === undefined)
    throw new Error(`Player with ID: ${playerId} not found`);
  var playerState =
    ServerProvider.playerStateRepository.getPlayerState(playerId);
  if (playerState === undefined) {
    playerState = {
      life: DefaultConfiguration.initialLife,
      jumpsAvailable: DefaultConfiguration.jumps,
      inInertia: false,
      position: {
        x: DefaultConfiguration.initialX,
        y: DefaultConfiguration.initialY,
      },
      velocity: { x: 0, y: 0 },
      canMove: true,
    };
  }
  const view = new PhaserPlayerView(
    scene,
    playerState.position.x,
    playerState.position.y,
    DefaultConfiguration.height,
    DefaultConfiguration.width
  );
  scene.addToLifecycle(view);
  ServerProvider.presenterProvider.forPlayer(
    view,
    new PlayerSocketInput(playerId, connection)
  );
  return new Player(playerInfo, playerState, view);
}

export class CreatePlayerFromId {
  readonly infoRepository: PlayerInfoRepository;
  readonly stateRepository: PlayerStateRepository;
  readonly presenterProvider: ServerPresenterProvider;
  readonly connectedPlayersRepository: ConnectedPlayersRepository;

  constructor(
    infoRepository: PlayerInfoRepository,
    stateRepository: PlayerStateRepository,
    presenterProvider: ServerPresenterProvider,
    connectedPlayersRepository: ConnectedPlayersRepository
  ) {
    this.infoRepository = infoRepository;
    this.stateRepository = stateRepository;
    this.presenterProvider = presenterProvider;
    this.connectedPlayersRepository = connectedPlayersRepository;
  }

  public execute(
    playerId: string,
    scene: GameScene,
    connection: ClientConnection
  ) {
    const playerInfo = this.infoRepository.getPlayer(playerId);
    if (playerInfo === undefined)
      throw new Error(`Player with ID: ${playerId} not found`);
    var playerState = this.stateRepository.getPlayerState(playerId);
    if (playerState === undefined) {
      playerState = {
        life: DefaultConfiguration.initialLife,
        jumpsAvailable: DefaultConfiguration.jumps,
        inInertia: false,
        position: {
          x: DefaultConfiguration.initialX,
          y: DefaultConfiguration.initialY,
        },
        velocity: { x: 0, y: 0 },
        canMove: true,
      };
    }
    const view = new PhaserPlayerView(
      scene,
      playerState.position.x,
      playerState.position.y,
      DefaultConfiguration.height,
      DefaultConfiguration.width
    );
    scene.addToLifecycle(view);
    this.presenterProvider.forPlayer(
      view,
      new PlayerSocketInput(playerId, connection)
    );
    const player = new Player(playerInfo, playerState, view);
    this.connectedPlayersRepository.savePlayer(playerId, player);
    return player;
  }
}
