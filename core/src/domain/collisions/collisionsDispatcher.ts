import { Observable, Subject } from "rxjs";
import { CollisionData } from "./collisionData";

type CollisionStartEvent = Phaser.Physics.Matter.Events.CollisionStartEvent;
type MatterCollisionData = Phaser.Types.Physics.Matter.MatterCollisionData;

export class CollisionsDispatcher {

  subscriptions: Map<string, Subject<CollisionData>> = new Map();

  constructor() {}

  public subscribeToStartCollision(id: string): Observable<CollisionData> {
    const subject = new Subject<CollisionData>();
    this.subscriptions.set(id, subject);
    return subject;
  }

  public sendCollisionStart(anEvent: CollisionStartEvent) {
    anEvent.pairs.forEach((pair) => {
      this.sendEventToBody(pair.bodyA, pair.bodyB, pair);
      this.sendEventToBody(pair.bodyB, pair.bodyA, pair);
    });
  }

  private sendEventToBody(
    bodySource: MatterJS.BodyType,
    bodyTarget: MatterJS.BodyType,
    event: MatterCollisionData
  ) {
    const subject = this.subscriptions.get(bodySource.id.toString());
    if (subject) subject.next(createData(event, bodyTarget));
  }
}

function createData(
  data: MatterCollisionData,
  bodyTarget: MatterJS.BodyType
): CollisionData {
  return {
    normal: (data as any).collision.normal,
    tangent: (data as any).collision.tangent,
    collidedCategory: bodyTarget.collisionFilter.category,
  };
}
