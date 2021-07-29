import { Socket } from "socket.io-client"
import { GameEvents, InitialGameStateEvent, PlayersPositionsEvent } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerFromDto } from "../domain/actions/providePlayerFromDto"
import { CoreProvider } from "../coreProvider";
import { RenderDelegator } from "../view/RenderDelegator";
import { PlayerRenderDelegator } from "../view/ClientRenderDelegator";
import { PlayerFacade } from "../domain/playerFacade";
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO";
import { ServerConnection } from "../domain/serverConnection";
import { ValidatePosition } from "../domain/actions/validatePosition";
import { Log } from "../infrastructure/Logger";

export class ClientGame {

    readonly connection: ServerConnection
    readonly provider: CoreProvider
    readonly scene: GameScene
    readonly render: RenderDelegator
    readonly localPlayerId: string
    localPlayer: PlayerFacade | undefined
    connectedPlayers: Map<string, PlayerFacade>

    constructor(
        localPlayerId: string,
        coreProvider: CoreProvider,
        connection: ServerConnection,
        scene: GameScene) {
        this.provider = coreProvider
        this.connection = connection
        this.scene = scene
        this.localPlayerId = localPlayerId
        this.render = new PlayerRenderDelegator()
        this.connectedPlayers = new Map()

        scene.onCreate.subscribe(() => {
            this.listenEvents()
            connection.emitStartNewConnection(localPlayerId)
        })
    
    }
    
    listenEvents() {

        this.connection.onInitialGameState.subscribe(data => {
            // console.log("[Client Game :: ] ", data)
            Log(this, "Initial Game State Event", data)
            const players = data.players.map(dto => {
                const player = ProvidePlayerFromDto(dto, this.scene, this.render)
                this.connectedPlayers.set(player.info.id.toString(), player)
                return player
            })
            this.localPlayer = players.find(p => p.info.id === this.localPlayerId)
            
            this.connectedPlayers.delete(this.localPlayerId.toString())
            if (this.localPlayer) this.render.renderLocalPlayer(this.localPlayer.view)
        })

        this.connection.onPlayersPositions.subscribe(data => {
            const localConnection = data.positions.find(p => p.id == this.localPlayerId)
            if (localConnection && this.localPlayer) ValidatePosition(this.localPlayer, localConnection.position)
            data.positions.forEach(p => this.connectedPlayers.get(p.id)?.view.setPosition(p.position.x, p.position.y))
        })

        this.connection.onNewPlayerConnected.subscribe(data => {
            if (data.player.id === this.localPlayerId || this.connectedPlayers.has(data.player.id)) return
            const player = ProvidePlayerFromDto(data.player, this.scene, this.render)
            this.connectedPlayers.set(player.info.id.toString(), player)
        })

        this.connection.onPlayerDisconnected.subscribe(data => {
            const player = this.connectedPlayers.get(data.playerId)
            if (!player) return
            player.view.destroy()
            this.connectedPlayers.delete(data.playerId)
        })
    }
}