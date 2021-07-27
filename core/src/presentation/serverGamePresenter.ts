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


export class ServerGame {

    readonly gameScene: GameScene
    readonly provider: CoreProvider
    readonly render: RenderDelegator

    private connectedPlayers: Map<string, {con: ClientConnection, player: Player, stateDto: PlayerStateDto}>

    constructor(
        gameScene: GameScene,
        coreProvider: CoreProvider) {
        this.provider = coreProvider
        this.gameScene = gameScene
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
                            const player = ProvidePlayerFromId(parseInt(playerId, 10), this.provider.playerInfoRepository, this.provider.playerStateRepository, this.gameScene, this.render)
                            const state = ProvidePlayerStateDto(player)
                            this.gameScene.addPlayers([player])
                            connection.sendInitialStateEvent(Array.from(this.connectedPlayers.values()).map(c => c.stateDto))
                            this.connectedPlayers.forEach(p => p.con.sendNewPlayerConnected(state))
                            this.connectedPlayers.set(player.info.id.toString(), {con: connection, player, stateDto: state})                            
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
            this.connectedPlayers.forEach(p => {
                p.con.sendPlayerPositions(data)
            })
        })
    }

}