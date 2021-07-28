import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerFromId } from "../domain/actions/providePlayerFromId"
import { CoreProvider } from "../coreProvider";
import { ClientConnection } from "../domain/clientConnection";
import { Player } from "../domain/player";
import { RenderDelegator } from "../view/RenderDelegator";
import { ServerRenderDelegator } from "../view/ServerRenderDelegator";
import { ProvidePlayerStateDto } from "../domain/actions/providePlayerStateDto";
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO";
import { RoomConnection } from "../domain/roomConnection";


export class ServerGame {

    readonly gameScene: GameScene
    readonly provider: CoreProvider
    readonly render: RenderDelegator
    readonly room: RoomConnection
    private connectedPlayers: Map<string, {con: ClientConnection, player: Player, stateDto: PlayerStateDto}>

    constructor(
        gameScene: GameScene,
        coreProvider: CoreProvider,
        room: RoomConnection) {
        this.provider = coreProvider
        this.gameScene = gameScene
        this.room = room
        this.render = new ServerRenderDelegator()
        this.connectedPlayers = new Map()

        //Mock player added 
        this.listenEvents()
    }

    listenEvents() {
        this.provider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => {
                        try {
                            const player = ProvidePlayerFromId(playerId, this.provider.playerInfoRepository, this.provider.playerStateRepository, this.gameScene, this.render)
                            const state = ProvidePlayerStateDto(player)
                            this.room.emit(GameEvents.NEW_PLAYER_CONNECTED.name, GameEvents.NEW_PLAYER_CONNECTED.getEvent(state))
                            this.connectedPlayers.set(player.info.id.toString(), {con: connection, player, stateDto: state})  
                            connection.sendInitialStateEvent(Array.from(this.connectedPlayers.values()).map(c => c.stateDto))                                                      
                            console.log(`[Game addPlayer] player added to scene with id: ${playerId}`)            
                        } catch (error) {
                            console.log(`[Game addPlayer] ERROR: ${error}`)
                        }
                    })
            })
        
        this.provider.connectionsRepository.onDisconnection()
            .subscribe(connection => {

            })
        
        this.gameScene.onUpdate.subscribe(({time, delta}) => {
            const data = Array.from(this.connectedPlayers.values()).map(p => ({id: p.player.info.id.toString(), position: p.player.view.body.position}))
            this.room.emit(GameEvents.PLAYERS_POSITIONS.name, GameEvents.PLAYERS_POSITIONS.getEvent(data))
        })
    }

}