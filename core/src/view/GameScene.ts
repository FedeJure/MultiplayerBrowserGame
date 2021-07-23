import { PlayerView } from './playerView';
import { Player } from '../domain/player';
import { PlayerViewRepository } from "../infrastructure/repositories/playerViewRepository"
import { Observable, Subject } from 'rxjs';


export class GameScene extends Phaser.Scene {

  playersGroup: Phaser.Physics.Arcade.Group | undefined
  playerViewRepository: PlayerViewRepository
  platformsGroup: Phaser.Physics.Arcade.StaticGroup | undefined

  protected playersToAdd : Player[];
  
  private _onUpdate = new Subject<{time: number, delta: number}>() 

  constructor() {
    super({ key: "gameScene" });
    this.playerViewRepository = new PlayerViewRepository()
    this.playersToAdd = []
  }

  create() {
    this.playersGroup = this.physics.add.group();
    this.platformsGroup = this.physics.add.staticGroup();
    this.initPlatforms();
    this.initPlayersOverlap()
  }

  update(time: number, delta: number) {
    this._onUpdate.next({time, delta})
  }

  get onUpdate() : Observable<{time:number, delta: number}>{
    return this._onUpdate
  }


  addPlayers = (players: Array<Player>) => {
    players.forEach(this.addPlayer)
  }


  private addPlayer = (player: Player) => {
    const playerView = new PlayerView(this, player)
    this.physics.add.existing(playerView);
    this.add.existing(playerView);
    this.playersGroup?.add(playerView);
    this.playerViewRepository.addPlayer(playerView, player.playerInfo.id)
    if (!this.platformsGroup) return;
    this.physics.add.collider(playerView, this.platformsGroup);
  }

  removePlayer = (playerId: number) => {
    this.playerViewRepository.getPlayer(playerId)?.destroy()
    this.playerViewRepository.removePlayer(playerId)
  }

  initPlatforms = () => {
    //TODO: refactorear esto para generar platform de archivo de configs
    var platformCount = 7;
    var platformY = 550;
    var lastPlatformX = -200;
    for (var i = 0; i < platformCount; i++) {
      this.platformsGroup?.create(lastPlatformX, platformY, "ground");
      lastPlatformX += 200 * 0.5;
    }
    this.platformsGroup?.addMultiple([
      new Phaser.GameObjects.Rectangle(
        this,
        -700,
        platformY,
        10,
        1000,
        0,
        100
      ),
      new Phaser.GameObjects.Rectangle(this, 2000, platformY, 10, 1000, 0, 10)
    ]);
  }

  onPlayerOverlapsOther = (
    player1: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    player2: Phaser.Types.Physics.Arcade.GameObjectWithBody) => {
    //TODO: do stuffs
  }

  initPlayersOverlap = () => {
    if (!this.playersGroup) return;
    this.physics.add.overlap(this.playersGroup, this.playersGroup, this.onPlayerOverlapsOther);
  }

}
