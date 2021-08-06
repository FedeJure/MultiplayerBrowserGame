import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/scenes/GameScene"
import { ProvidePlayerFromId } from "../domain/actions/providePlayerFromId"
import { ServerProvider } from "../serverProvider";
import { RoomConnection } from "../domain/roomConnection";
import { Log } from "../infrastructure/Logger";

export class ServerGame {

    readonly gameScene: GameScene
    readonly room: RoomConnection

    private playerConnections: Map<string, string>

    constructor(
        gameScene: GameScene,
        room: RoomConnection) {
        this.gameScene = gameScene
        this.room = room
        this.playerConnections = new Map()

        this.gameScene.onCreate.subscribe(() => {
            this.listenEvents()
        })
    }

    listenEvents() {
        ServerProvider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => {
                        try {
                            const player = ProvidePlayerFromId(playerId, this.gameScene, connection)
                            ServerProvider.connectedPlayerRepository.savePlayer(playerId, player)
                            this.playerConnections.set(connection.connectionId, playerId)
                            connection.sendInitialStateEvent(ServerProvider.connectedPlayerRepository.getAll().map(c =>  ({info: c.info, id: c.info.id, state: c.state})))
                            this.room.emit(GameEvents.NEW_PLAYER_CONNECTED.name, GameEvents.NEW_PLAYER_CONNECTED.getEvent(({id: player.info.id, info: player.info, state: player.state})))                                                                              
                            Log(this,`[Game addPlayer] player added to scene with id: ${playerId}`)            
                        } catch (error) {
                            Log(this,`[Game addPlayer] ERROR: ${error}`)
                        }
                    })
            })
        
        ServerProvider.connectionsRepository.onDisconnection()
            .subscribe(connection => {
                const playerId = this.playerConnections.get(connection.connectionId)
                if (playerId) {
                    this.room.emit(GameEvents.PLAYER_DISCONNECTED.name, GameEvents.PLAYER_DISCONNECTED.getEvent(playerId))
                    const player = ServerProvider.connectedPlayerRepository.getPlayer(playerId)
                    if (player) {
                        player.destroy()
                        ServerProvider.connectedPlayerRepository.removePlayer(playerId)
                    }
                }
                this.playerConnections.delete(connection.connectionId)
            })
        
        this.gameScene.onUpdate.subscribe(({time, delta}) => {
            const data = Array.from(ServerProvider.connectedPlayerRepository.getAll().map(p => ({id: p.info.id, state: p.state})))
            this.room.emit(GameEvents.PLAYERS_STATES.name, GameEvents.PLAYERS_STATES.getEvent(data))
        })
    }

}