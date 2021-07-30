import { GameScene } from "../view/scenes/GameScene"
import { ProvidePlayerFromDto } from "../domain/actions/providePlayerFromDto"
import { CoreProvider } from "../coreProvider";
import { PlayerFacade } from "../domain/playerFacade";
import { ServerConnection } from "../domain/serverConnection";
import { ValidateState } from "../domain/actions/validatePosition";
import { Log } from "../infrastructure/Logger";

export class ClientGamePresenter {

    readonly connection: ServerConnection
    readonly provider: CoreProvider
    readonly scene: GameScene
    readonly localPlayerId: string
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
        this.connectedPlayers = new Map()

        scene.onCreate.subscribe(() => {
            this.listenEvents()
            connection.emitStartNewConnection(localPlayerId)
        })
    }
    
    listenEvents() {

        this.connection.onInitialGameState.subscribe(data => {
            Log(this, "Initial Game State Event", data)
            const players = data.players.map(dto => {
                var player: PlayerFacade
                if (dto.id === this.localPlayerId) player = ProvidePlayerFromDto(dto, this.scene, true)
                else player = ProvidePlayerFromDto(dto, this.scene)
                this.scene.addToLifecycle(player.view)
                this.connectedPlayers.set(player.info.id.toString(), player)
                return player
            })           
        })

        this.connection.onPlayersPositions.subscribe(data => {
            const localConnection = data.positions.find(p => p.id == this.localPlayerId)
            if (localConnection && this.localPlayer) ValidateState(this.localPlayer, localConnection)
            data.positions.forEach(p =>{
                const player = this.connectedPlayers.get(p.id)
                if (player) ValidateState(player, p)
            })
        })

        this.connection.onNewPlayerConnected.subscribe(data => {
            if (data.player.id === this.localPlayerId || this.connectedPlayers.has(data.player.id)) return
            const player = ProvidePlayerFromDto(data.player, this.scene)
            this.scene.addToLifecycle(player.view)
            this.connectedPlayers.set(player.info.id.toString(), player)
        })

        this.connection.onPlayerDisconnected.subscribe(data => {
            const player = this.connectedPlayers.get(data.playerId)
            if (!player) return
            this.scene.removeFromLifecycle(player.view)
            player.view.destroy()
            this.connectedPlayers.delete(data.playerId)
        })
    }

    private get localPlayer() { return this.connectedPlayers.get(this.localPlayerId) }
}