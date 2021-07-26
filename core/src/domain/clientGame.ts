import { Socket } from "socket.io-client"
import { GameEvents, InitialGameStateEvent, PlayersPositionsEvent } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerFromDto } from "../domain/actions/providePlayerFromDto"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";
import { Scene } from "phaser"
import { ServerRenderDelegator } from "../view/ServerRenderDelegator";
import { RenderDelegator } from "../view/RenderDelegator";
import { ClientRenderDelegator } from "../view/ClientRenderDelegator";
import { PlayerFacade } from "./playerFacade";

export class ClientGame {

    readonly socket: Socket
    readonly provider: CoreProvider
    readonly scene: GameScene
    readonly render: RenderDelegator
    readonly localPlayerId: number
    localPlayer: PlayerFacade | undefined

    constructor(
        localPlayerId: number,
        coreProvider: CoreProvider,
        socket: Socket,
        scene: GameScene) {
        this.provider = coreProvider
        this.socket = socket
        this.scene = scene
        this.localPlayerId = localPlayerId
        this.render = new ClientRenderDelegator()

        this.listenEvents()
        
        socket.emit(GameEvents.PLAYER_CONNECTED.name, GameEvents.PLAYER_CONNECTED.getEvent(1));        
    }
    listenEvents() {
        this.scene.onPreload.subscribe(() => {
            this.scene.load.spritesheet("player", "./assets/player_anims.png", {
                frameWidth: 50,
                frameHeight: 37
            });
            this.scene.load.image("background", "./assets/background.png");
            this.scene.load.image("ground", "./assets/simple_platform.png");
            this.scene.anims.create({
                key: "idle",
                frames: this.scene.anims.generateFrameNumbers("player", { start: 0, end: 2 }),
                frameRate: 5,
                repeat: -1
            });
        })
        this.socket.on(GameEvents.INITIAL_GAME_STATE.name, (data: InitialGameStateEvent) => {
            console.log("[Client Game :: Initial Game State Event] ", data)
            const players = data.players.map(dto => ProvidePlayerFromDto(dto, this.scene, this.render))
            this.localPlayer = players.find(p => p.info.id == this.localPlayerId)
            this.scene.addPlayers(players)
            if (this.localPlayer) this.render.renderLocalPlayer(this.localPlayer.view)
        })
        this.socket.on(GameEvents.PLAYERS_POSITIONS.name, (data: PlayersPositionsEvent) => {
            // console.log(data.positions.map(d => d.position.y))
        })
    }
}