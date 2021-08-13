import { PlayerInfo } from "../../domain/player/playerInfo";
import { PlayerInput } from "../../domain/player/playerInput";
import { ServerPlayerPresenter } from "../../presentation/serverPlayerPresenter";
import { PhaserPlayerView } from "../../view/playerView";

export class ServerPresenterProvider {
  forPlayer(view: PhaserPlayerView, info: PlayerInfo, input: PlayerInput): void {
    new ServerPlayerPresenter(view, info, input);
  }
}
