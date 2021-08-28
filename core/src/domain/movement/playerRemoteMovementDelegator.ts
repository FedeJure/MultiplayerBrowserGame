import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { ServerConnection } from "../serverConnection";
import { Side } from "../side";

export class PlayerRemoteMovementDelegator implements Delegator {
  private readonly player: Player;
  private readonly connection: ServerConnection;

  private readonly disposer: Disposer = new Disposer();
  private lastState: PlayerState | undefined;

  constructor(player: Player, connection: ServerConnection) {
    this.player = player;
    this.connection = connection;
  }
  init(): void {
    this.disposer.add(
      this.connection.onPlayersStates.subscribe((event) => {
        this.lastState = event.states[this.player.info.id];
      })
    );
  }
  stop(): void {
    this.disposer.dispose();
  }

  update(time: number, delta: number): void {
    if (this.lastState) {
      const view = this.player.view;
      view.setScale(
        (this.lastState.side == Side.RIGHT ? 1 : -1) *
          Math.abs(this.player.view.scaleX),
        this.player.view.scaleY
      );
      view.setPosition(this.lastState.position.x, this.lastState.position.y);
      view.setVelocity(this.lastState.velocity.x, this.lastState.velocity.y);
    }
  }
}
