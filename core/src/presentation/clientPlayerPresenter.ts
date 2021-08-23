import { delay, filter, last, Subscription, take } from "rxjs";
import { ValidateStateAction } from "../domain/actions/validatePosition";
import { Player } from "../domain/player/player";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerStatesEvent } from "../infrastructure/events/gameEvents";
import { PhaserPlayerView } from "../view/playerView";

export class ClientPlayerPresenter {
  protected readonly view: PhaserPlayerView;
  protected readonly player: Player;
  protected readonly connection: ServerConnection;
  private readonly validateState: ValidateStateAction;

  private readonly subscriptions: Subscription[] = [];

  constructor(
    view: PhaserPlayerView,
    connection: ServerConnection,
    player: Player,
    validateState: ValidateStateAction
  ) {
    this.view = view;
    this.player = player;
    this.validateState = validateState;
    this.connection = connection;
    this.createAnimations(view);
    this.renderPlayer(view);

    this.subscriptions.push(
      connection.onPlayersStates
        .subscribe(this.HandleStateEvent.bind(this))
    );

    this.connection.onPlayerDisconnected
      .pipe(filter((p) => p.playerId === player.info.id))
      .subscribe((_) => {
        this.subscriptions.forEach((s) => s.unsubscribe());
        player.view.destroy();
      });
  }

  private HandleStateEvent(statesEvent: PlayerStatesEvent): void {
    const state = statesEvent.states[this.player.info.id];
    if (new Boolean(state)) this.validateState.execute(this.player, state);
  }

  private renderPlayer(player: PhaserPlayerView): void {
    this.createAnimations(player);
    player.setTexture("player_anim");
    player.anims.play("idle");
    player.scene.add.existing(player);
  }

  private createAnimations(player: PhaserPlayerView) {
    if (!player.scene.anims.exists("idle"))
      player.scene.anims.create({
        key: "idle",
        frames: player.scene.anims.generateFrameNumbers("player_anim", {
          start: 0,
          end: 2,
        }),
        frameRate: 5,
        repeat: -1,
      });
  }
}
