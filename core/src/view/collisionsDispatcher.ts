import { Observable, Subject } from "rxjs";
export class CollisionsDispatcher {

    subscriptions: Map<number, Subject<Phaser.Physics.Matter.Events.CollisionStartEvent>> = new Map()

    constructor() { 
    }
    
    public subscribeToCollisions(bodyId: number) : Observable<Phaser.Physics.Matter.Events.CollisionStartEvent>{
        const subject = new Subject<Phaser.Physics.Matter.Events.CollisionStartEvent>()
        this.subscriptions.set(bodyId, subject)
        return subject
    }

    public sendCollisionStart(anEvent: Phaser.Physics.Matter.Events.CollisionStartEvent) {
        anEvent.pairs.forEach(pair => {
            this.sendEventToBody(pair.bodyA, anEvent)
            this.sendEventToBody(pair.bodyB, anEvent)
        })
    }

    private sendEventToBody(body: MatterJS.BodyType, event: Phaser.Physics.Matter.Events.CollisionStartEvent) {
        const subject = this.subscriptions.get(body.id)
        if (subject) subject.next(event)
    }
}