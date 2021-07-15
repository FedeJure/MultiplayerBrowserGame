import { Socket } from "socket.io"
import { Socket as ClientSocket } from "socket.io-client"
import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";


export class Game {

    readonly gameScene: GameScene
    readonly socket: Socket | ClientSocket
    readonly provider: CoreProvider

    constructor(
        config: GameConfig,
        gameScene: GameScene,
        coreProvider: CoreProvider,
        socket: Socket | ClientSocket) {
        this.provider = coreProvider
        this.gameScene = gameScene 
        this.socket = socket

        //Mock player added 
        this.provider.playerInfoRepository.addPlayer(1, {id: 1, name: "Test Player"})

        new Phaser.Game(config)
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