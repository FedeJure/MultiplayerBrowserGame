import { Socket } from "socket.io"
import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../scenes/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"
import { CoreProvider } from "../coreProvider";


export class Game {

    readonly gameScene: GameScene
    readonly socket: Socket
    readonly provider: CoreProvider

    constructor(gameScene: GameScene,
        coreProvider: CoreProvider,
        socket: Socket) {
        this.provider = coreProvider
        this.gameScene = gameScene 
        this.socket = socket
        this.listenEvents()
    }

    listenEvents() {
        this.socket.on(GameEvents.PLAYER_CONNECTED, (data: any) => {
            try {
                const { id } : { id: number } = data
                const player = ProvidePlayerData(id, this.provider.playerInfoRepository, this.provider.playerStateRepository)
                this.gameScene.addPlayers([player])
            } catch (error) {
                console.log(`[Game event] ${GameEvents.PLAYER_CONNECTED} ERROR: ${error}`)
            }
        })
    }
}