import { Observable, Subject } from 'rxjs';
import { Scene, GameObjects, Physics } from "phaser"
import { PlayerFacade } from '../../domain/playerFacade';

export class GameScene extends Scene {

  private _onUpdate = new Subject<{ time: number, delta: number }>()
  private _onCreate = new Subject<void>()

  private _lifeCycleObjects : Phaser.GameObjects.Group | undefined

  constructor() {
    super({ key: "gameScene" });
  }

  create() {
    this.scene.launch("hud")
    this._lifeCycleObjects = this.add.group({ runChildUpdate: true} )
    this.initPlatforms();
    const background = this.add.image(1250, 300, "background");
    background.scaleY = 2;
    background.scaleX = 2;
    this._onCreate.next()    
  }

  update(time: number, delta: number) {
    this._onUpdate.next({ time, delta })
  }

  addToLifecycle(object: Phaser.GameObjects.GameObject) {
    this._lifeCycleObjects?.add(object)
  }

  removeFromLifecycle(object: Phaser.GameObjects.GameObject) {
    this._lifeCycleObjects?.remove(object)
  }

  get onUpdate(): Observable<{ time: number, delta: number }> {
    return this._onUpdate
  }

  get onCreate(): Observable<void> {
    return this._onCreate
  }

  initPlatforms = () => {
    //TODO: refactorear esto para generar platform de archivo de configs
    var platformCount = 1;
    var platformY = 500;
    var lastPlatformX = -200;
    for (var i = 0; i < platformCount; i++) {
      const ground = new Physics.Matter.Image(this.matter.world,lastPlatformX, platformY, "")
      ground.setSize(200,50)
      ground.setStatic(true)
      ground.setOrigin(1,1)
      ground.setScale(100,1)
      ground.setBounce(0)
      this.matter.world.add(ground)
      lastPlatformX += 200 * 0.5;
    }
  }

}
