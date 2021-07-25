import { GameEvents, InitialGameStateEvent } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerFromId } from "../domain/actions/providePlayerFromId"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";
import { ClientConnection } from "./clientConnection";
import { Socket } from "socket.io";
import { Player } from "./player";
import { RenderDelegator } from "../view/RenderDelegator";
import { ServerRenderDelegator } from "../view/ServerRenderDelegator";
import { ProvidePlayerStateDto } from "./actions/providePlayerStateDto";
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO";


export class ServerGame {

    readonly gameScene: GameScene
    readonly provider: CoreProvider
    readonly render: RenderDelegator

    private connectedPlayers: {con: ClientConnection, player: Player, stateDto: PlayerStateDto}[]

    constructor(
        gameScene: GameScene,
        coreProvider: CoreProvider) {
        this.provider = coreProvider
        this.gameScene = gameScene
        this.render = new ServerRenderDelegator()
        this.connectedPlayers = []

        //Mock player added 
        this.listenEvents()
    }

    listenEvents() {
        this.provider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => {
                        this.addPlayer(playerId, connection)
                        connection.socket.emit(GameEvents.INITIAL_GAME_STATE.name, 
                            GameEvents.INITIAL_GAME_STATE.getEvent(this.connectedPlayers.map(c => c.stateDto)))
                    })
            })
        
        this.gameScene.onUpdate.subscribe(({time, delta}) => {
            const data = this.connectedPlayers.map(p => ({id: p.player.info.id, position: p.player.view.body.position}))
            const event = GameEvents.PLAYERS_POSITIONS.getEvent(data)
            this.connectedPlayers.forEach(p => {
                p.con.socket.emit(GameEvents.PLAYERS_POSITIONS.name, event)
            })
        })
    }

    addPlayer(playerId: string, connection: ClientConnection) {
        try {
            const player = ProvidePlayerFromId(parseInt(playerId, 10), this.provider.playerInfoRepository, this.provider.playerStateRepository, this.gameScene, this.render)
            this.connectedPlayers.push({con: connection, player, stateDto: ProvidePlayerStateDto(player)})
            this.gameScene.addPlayers([player])
            
            console.log(`[Game addPlayer] player added to scene with id: ${playerId}`)
        } catch (error) {
            console.log(`[Game addPlayer] ERROR: ${error}`)
        }
    }


}