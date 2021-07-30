import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/scenes/GameScene"
import { ProvidePlayerFromId } from "../domain/actions/providePlayerFromId"
import { Provider } from "../coreProvider";
import { ClientConnection } from "../domain/clientConnection";
import { Player } from "../domain/player";
import { ProvidePlayerStateDto } from "../domain/actions/providePlayerStateDto";
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO";
import { RoomConnection } from "../domain/roomConnection";
import { Log } from "../infrastructure/Logger";


export class ServerGame {

    readonly gameScene: GameScene
    readonly room: RoomConnection

    private connectedPlayers: Map<string, {con: ClientConnection, player: Player, stateDto: PlayerStateDto}>
    private playerConnections: Map<string, string>

    constructor(
        gameScene: GameScene,
        room: RoomConnection) {
        this.gameScene = gameScene
        this.room = room
        this.connectedPlayers = new Map()
        this.playerConnections = new Map()

        this.gameScene.onCreate.subscribe(() => {
            this.listenEvents()
        })
    }

    listenEvents() {
        Provider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => {
                        try {
                            const player = ProvidePlayerFromId(playerId, this.gameScene)
                            const state = ProvidePlayerStateDto(player)
                            this.gameScene.addToLifecycle(player.view)
                            this.room.emit(GameEvents.NEW_PLAYER_CONNECTED.name, GameEvents.NEW_PLAYER_CONNECTED.getEvent(state))
                            this.connectedPlayers.set(playerId, {con: connection, player, stateDto: state})
                            this.playerConnections.set(connection.connectionId, playerId)
                            connection.sendInitialStateEvent(Array.from(this.connectedPlayers.values()).map(c => c.stateDto))                                                      
                            Log(this,`[Game addPlayer] player added to scene with id: ${playerId}`)            
                        } catch (error) {
                            Log(this,`[Game addPlayer] ERROR: ${error}`)
                        }
                    })
            })
        
        Provider.connectionsRepository.onDisconnection()
            .subscribe(connection => {
                const playerId = this.playerConnections.get(connection.connectionId)
                if (playerId) {
                    this.room.emit(GameEvents.PLAYER_DISCONNECTED.name, GameEvents.PLAYER_DISCONNECTED.getEvent(playerId))
                    const player = this.connectedPlayers.get(playerId)
                    if (player) {
                        this.gameScene.removeFromLifecycle(player.player.view)
                        player.player.destroy()
                        this.connectedPlayers.delete(playerId)
                    }
                }
                this.playerConnections.delete(connection.connectionId)
            })
        
        this.gameScene.onUpdate.subscribe(({time, delta}) => {
            const data = Array.from(this.connectedPlayers.values()).map(p => (ProvidePlayerStateDto(p.player)))
            this.room.emit(GameEvents.PLAYERS_POSITIONS.name, GameEvents.PLAYERS_POSITIONS.getEvent(data))
        })
    }

}