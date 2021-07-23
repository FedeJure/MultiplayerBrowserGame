import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";
import { ClientConnection } from "./clientConnection";
import { Socket } from "socket.io";
import { Player } from "./player";


export class ServerGame {

    readonly gameScene: GameScene
    readonly provider: CoreProvider
    private connectedPlayers: {con: ClientConnection, player: Player}[]

    constructor(
        gameScene: GameScene,
        coreProvider: CoreProvider,
        socket: Socket) {
        this.provider = coreProvider
        this.gameScene = gameScene
        this.connectedPlayers = []

        //Mock player added 
        this.provider.playerInfoRepository.addPlayer(1, { id: 1, name: "Test Player" })
        this.listenEvents()
    }

    listenEvents() {
        this.provider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => this.addPlayer(playerId, connection))
            })
        
        this.gameScene.onUpdate.subscribe(({time, delta}) => {
            const data = this.connectedPlayers.map(p => ({id: p.player.playerInfo.id, position: p.player.state.position}))
            const event = GameEvents.PLAYERS_POSITIONS.getEvent(data)
            this.connectedPlayers.forEach(p => {
                p.con.socket.emit(GameEvents.PLAYERS_POSITIONS.name, event)
            })
        })
    }

    addPlayer(playerId: string, connection: ClientConnection) {
        try {
            const player = ProvidePlayerData(parseInt(playerId, 10), this.provider.playerInfoRepository, this.provider.playerStateRepository)
            this.connectedPlayers.push({con: connection, player})
            this.gameScene.addPlayers([player])
            
            console.log(`[Game addPlayer] player added to scene with id: ${playerId}`)
        } catch (error) {
            console.log(`[Game addPlayer] ERROR: ${error}`)
        }
    }


}