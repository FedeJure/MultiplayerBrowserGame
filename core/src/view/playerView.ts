import { BodyType } from "matter";
import { Physics, Scene } from "phaser";
import { Observable, Subject } from "rxjs";
import { CollisionTypes } from "./collisions/collisionTypes";
import { PlayerView } from "../presentation/playerView";
import { GameScene } from "./scenes/GameScene";

export class PhaserPlayerView
  extends Physics.Matter.Sprite
  implements PlayerView
{
  //TODO: ver de crear interfaces en el dominio con todas las propiedades q se usen de Phaser, para aislar
  // el core de la dependencia del framework
  readonly scene: Scene;
  private readonly _onUpdate = new Subject<{ time: number; delta: number }>();
  private readonly _onPreUpdate = new Subject<{
    time: number;
    delta: number;
  }>();

  constructor(
    scene: GameScene,
    x: number,
    y: number,
    height: number,
    width: number
  ) {
    super(scene.matter.world, x, y, "");
    this.height = height;
    this.width = width;
    this.setBounce(0);
    this.scene = scene;
    this.initCollisions(this)
  }

  private initCollisions(view: PhaserPlayerView) {
    view.setCollisionCategory(CollisionTypes.Player);
    view.setCollidesWith([CollisionTypes.StaticEnvironment]);
  }

  destroy() {
    super.destroy();
    this.scene?.matter.world.remove(this);
  }

  preUpdate(time: number, delta: number) {
    this._onPreUpdate.next({ time, delta });
  }

  update(time: number, delta: number) {
    this.setAngle(0); //Prevents to gameobject rotate due Matter physics. Cant find another solution at the moment
    this._onUpdate.next({ time, delta });
  }

  public get onUpdate(): Observable<{ time: number; delta: number }> {
    return this._onUpdate;
  }
  public get onPreUpdate(): Observable<{ time: number; delta: number }> {
    return this._onPreUpdate;
  }

  public get matterBody() { return this.body as BodyType }
}