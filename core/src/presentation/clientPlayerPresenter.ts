import { filter, Subscription } from "rxjs";
import { Delegator } from "../domain/delegator";
import { Player } from "../domain/player/player";
import { ServerConnection } from "../domain/serverConnection";
import { PhaserPlayerView } from "../view/playerView";

export class ClientPlayerPresenter {
  protected readonly view: PhaserPlayerView;
  protected readonly player: Player;
  protected readonly connection: ServerConnection;

  constructor(
    connection: ServerConnection,
    player: Player,
    delegators: Delegator[]
  ) {
    this.view = player.view;
    this.player = player;
    this.connection = connection;
    this.createAnimations(this.view);
    this.renderPlayer(this.view);

    this.connection.onPlayerDisconnected
      .pipe(filter((p) => p.playerId === player.info.id))
      .subscribe((_) => {
        delegators.forEach(d => d.stop())
        player.view.destroy();

      });

    delegators.forEach(d => d.init())
    this.view.onUpdate.subscribe(data => {
      delegators.forEach(d => d.update(data.time, data.delta))
    })
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
