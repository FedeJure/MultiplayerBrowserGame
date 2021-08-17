import { ClientProvider } from "./clientProvider";
import { PlayerInput } from "../../domain/player/playerInput";
import { ClientPlayerPresenter } from "../../presentation/clientPlayerPresenter";
import { LocalPlayerPresenter } from "../../presentation/localPlayerPresenter";
import { PresenterProvider } from "../../presentation/presenterProvider";
import { PhaserPlayerView } from "../../view/playerView";
import { GameScene } from "../../view/scenes/GameScene";
import { ClientGamePresenter } from "../../presentation/clientGamePresenter";
import { ActionProvider } from "./actionProvider";
import { Player } from "../../domain/player/player";

export class ClientPresenterProvider implements PresenterProvider {
  forLocalPlayer(view: PhaserPlayerView,
    input: PlayerInput,
    player: Player): void {
    new LocalPlayerPresenter(
      view,
      input,
      ClientProvider.serverConnection,
      ActionProvider.ResolvePlayerMovementWithInputs,
      player,
      ActionProvider.ValidatePosition,
      ClientProvider.playerStateRepository
    );
  }
  forPlayer(view: PhaserPlayerView, player: Player): void {
    new ClientPlayerPresenter(view,
      ClientProvider.serverConnection,
      player,
      ActionProvider.ValidatePosition);
  }

  forGameplay(scene: GameScene): void {
    new ClientGamePresenter(
      ClientProvider.localPlayerRepository.playerId,
      ClientProvider.serverConnection,
      scene,
      ActionProvider.CreateClientPlayer,
      ActionProvider.CreateLocalClientPlayer,
      ActionProvider.ValidatePosition,
      ClientProvider.connectedPlayers
    );
  }
}
