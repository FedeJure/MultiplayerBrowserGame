import { CollisionsDispatcher } from "./collisionsDispatcher";
import { CollisionCategory } from "./collisionTypes";
import { CollisionData } from "./collisionData";
import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { DefaultConfiguration } from "../player/playerConfiguration";
import { Player } from "../player/player";

export class PlayerCollisionDelegator implements Delegator {
  private readonly collisionsDispatcher: CollisionsDispatcher;
  private readonly player: Player;
  private readonly statesRepository: PlayerStateRepository;

  private readonly handlersMap: Map<
    CollisionCategory,
    (col: CollisionData) => void
  > = new Map();
  private readonly disposer: Disposer = new Disposer();

  constructor(
    player: Player,
    collisionsDispatcher: CollisionsDispatcher,
    statesRepository: PlayerStateRepository
  ) {
    this.collisionsDispatcher = collisionsDispatcher;
    this.player = player;
    this.statesRepository = statesRepository;
    this.handlersMap.set(
      CollisionCategory.StaticEnvironment,
      this.handleStaticEnvCollision.bind(this)
    );
  }

  init(): void {
    this.disposer.add(
      this.collisionsDispatcher
        .subscribeToStartCollision(this.player.view.matterBody.id.toString())
        .subscribe((col) => {
          const handler = this.handlersMap.get(col.collidedCategory);
          if (handler) handler(col);
        })
    );
  }
  stop(): void {
    this.disposer.dispose();
  }

  private handleStaticEnvCollision(col: CollisionData) {
    const state = this.statesRepository.getPlayerState(this.player.info.id);
    if (state)
      this.statesRepository.setPlayerState(this.player.info.id, {
        ...state,
        jumpsAvailable: DefaultConfiguration.initialJumps,
      });
  }
}
