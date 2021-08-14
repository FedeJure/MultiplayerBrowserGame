import { PlayerInfo } from "../../domain/player/playerInfo";
import { PlayerInput } from "../../domain/player/playerInput";
import { ServerPlayerPresenter } from "../../presentation/serverPlayerPresenter";
import { PhaserPlayerView } from "../../view/playerView";
import { ActionProvider } from "./actionProvider";

export class ServerPresenterProvider {
  forPlayer(
    view: PhaserPlayerView,
    info: PlayerInfo,
    input: PlayerInput
  ): void {
    new ServerPlayerPresenter(
      view,
      info,
      input,
      ActionProvider.ResolvePlayerMovementWithInputs
    );
  }
}
