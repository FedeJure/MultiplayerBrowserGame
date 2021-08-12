import { PlayerInput } from "../../domain/player/playerInput";
import { ServerPlayerPresenter } from "../../presentation/serverPlayerPresenter";
import { PhaserPlayerView } from "../../view/playerView";

export class ServerPresenterProvider {
  forPlayer(view: PhaserPlayerView, input: PlayerInput): void {
    new ServerPlayerPresenter(view, input);
  }
}
