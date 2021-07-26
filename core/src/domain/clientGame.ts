import { Socket } from "socket.io-client"
import { GameEvents, InitialGameStateEvent, PlayersPositionsEvent } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerFromDto } from "../domain/actions/providePlayerFromDto"
import { CoreProvider } from "../coreProvider";
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

        scene.onCreate.subscribe(() => {
            this.listenEvents()
            socket.emit(GameEvents.PLAYER_CONNECTED.name, GameEvents.PLAYER_CONNECTED.getEvent(1)); 
        })
    
    }
    
    listenEvents() {
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