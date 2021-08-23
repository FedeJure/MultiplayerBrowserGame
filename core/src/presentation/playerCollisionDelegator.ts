import { CollisionData } from "../view/collisions/collisionData";
import { CollisionsDispatcher } from "../view/collisions/collisionsDispatcher";
import { CollisionCategory } from "../view/collisions/collisionTypes";
import { PhaserPlayerView } from "../view/playerView";

export class PlayerCollisionDelegator {
    readonly collisionsDispatcher: CollisionsDispatcher
    readonly handlersMap: Map<CollisionCategory, (col: CollisionData) => void> = new Map()

    constructor(collisionsDispatcher: CollisionsDispatcher, view: PhaserPlayerView) {
        this.collisionsDispatcher = collisionsDispatcher

        this.handlersMap.set(CollisionCategory.StaticEnvironment, this.handleStaticEnvCollision)

        this.collisionsDispatcher.subscribeToStartCollision(view.matterBody.id)
        .subscribe(col => {
          const handler = this.handlersMap.get(col.collidedCategory)
          if (handler) handler(col)
        })
    }

    private handleStaticEnvCollision(col: CollisionData) {
        console.log("ENV COLLISION", col)
    }


}