import { Socket } from "socket.io"
import { GameEvents } from "../infrastructure/events/gameEvents"
import { ConnectionsRepository } from "../infrastructure/repositories/connectionsRepository"
import { PlayerInfoRepository } from "../infrastructure/repositories/playerInfoRepository"
import { PlayerStateRepository } from "../infrastructure/repositories/playerStateRepository"
import { GameScene } from "../scenes/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"


export class Game {

    readonly playerRepository: PlayerInfoRepository
    readonly playerStateRepository: PlayerStateRepository
    readonly gameScene: GameScene
    readonly connectionsRepository: ConnectionsRepository
    readonly socket: Socket

    constructor(gameScene: GameScene,
        playerRepository: PlayerInfoRepository,
        playerStateRepository: PlayerStateRepository,
        connectionsRepository: ConnectionsRepository,
        socket: Socket) {
        this.playerRepository = playerRepository
        this.playerStateRepository = playerStateRepository
        this.gameScene = gameScene 
        this.connectionsRepository = connectionsRepository
        this.socket = socket
        this.listenEvents()
    }

    listenEvents() {
        this.socket.on(GameEvents.PLAYER_CONNECTED, data => {
            try {
                const { id } : { id: number } = data
                const player = ProvidePlayerData(id, this.playerRepository, this.playerStateRepository)
                this.gameScene.addPlayers([player])
            } catch (error) {
                console.log(`[Game event] ${GameEvents.PLAYER_CONNECTED} ERROR: ${error}`)
            }
        })
    }
}