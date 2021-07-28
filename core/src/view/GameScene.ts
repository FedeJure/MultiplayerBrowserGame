import { Observable, Subject } from 'rxjs';
import { Scene, GameObjects, Physics } from "phaser"
import { PlayerFacade } from '../domain/playerFacade';

export class GameScene extends Scene {

  playersGroup: Phaser.Physics.Arcade.Group | undefined
  platformsGroup: Phaser.Physics.Arcade.StaticGroup | undefined

  private _onUpdate = new Subject<{ time: number, delta: number }>()
  private _onCreate = new Subject<void>()

  constructor() {
    super({ key: "gameScene" });
  }

  create() {
    // this.playersGroup = this.physics.add.group();
    // this.platformsGroup = this.physics.add.staticGroup();
    this.initPlatforms();
    this.initPlayersOverlap()
    const background = this.add.image(1250, 300, "background");
    background.scaleY = 2;
    background.scaleX = 2;
    this._onCreate.next()    
  }

  update(time: number, delta: number) {
    this._onUpdate.next({ time, delta })
  }

  get onUpdate(): Observable<{ time: number, delta: number }> {
    return this._onUpdate
  }

  get onCreate(): Observable<void> {
    return this._onCreate
  }

  addPlayers(players: Array<PlayerFacade>) {
    players.forEach(this.addPlayer)
  }

  private addPlayer = (player: PlayerFacade) => {
    this.playersGroup?.add(player.view);
    if (!this.platformsGroup) return;
    this.physics.add.collider(player.view, this.platformsGroup);
    
  }

  initPlatforms = () => {
    //TODO: refactorear esto para generar platform de archivo de configs
    var platformCount = 7;
    var platformY = 500;
    var lastPlatformX = -200;
    for (var i = 0; i < platformCount; i++) {
      // this.platformsGroup?.create(lastPlatformX, platformY, "ground");
      const ground = new Physics.Matter.Image(this.matter.world,lastPlatformX, platformY, "ground")
      ground.setBounce(0)
      ground.setStatic(true)
      ground.setOrigin(0.5,0.5)
      ground.setScale(100,1)
      this.matter.world.add(ground)
      lastPlatformX += 200 * 0.5;
      console.log(ground)
    }
    // this.platformsGroup?.addMultiple([
    //   new GameObjects.Rectangle(
    //     this,
    //     -700,
    //     platformY,
    //     10,
    //     1000,
    //     0,
    //     100
    //   ),
    //   new GameObjects.Rectangle(this, 2000, platformY, 10, 1000, 0, 10)
    // ]);
  }

  onPlayerOverlapsOther = (
    player1: Phaser.Types.Physics.Matter.MatterBody,
    player2: Phaser.Types.Physics.Matter.MatterBody) => {
    //TODO: do stuffs
  }

  initPlayersOverlap = () => {
    if (!this.playersGroup) return;
    this.physics.add.overlap(this.playersGroup, this.playersGroup, this.onPlayerOverlapsOther);
  }

}
