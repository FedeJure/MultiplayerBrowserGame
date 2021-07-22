import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";
import { ClientConnection } from "./clientConnection";


export class ServerGame {

    readonly gameScene: GameScene
    readonly provider: CoreProvider

    constructor(
        gameScene: GameScene,
        coreProvider: CoreProvider) {
        this.provider = coreProvider
        this.gameScene = gameScene

        //Mock player added 
        this.provider.playerInfoRepository.addPlayer(1, { id: 1, name: "Test Player" })
        this.listenEvents()
    }

    listenEvents() {
        this.provider.connectionsRepository.onNewConnection()
            .subscribe(connection => {
                connection.onPlayerConnection()
                    .subscribe(({ playerId }) => this.addPlayer(playerId))
            })
    }

    addPlayer(playerId: string) {
        try {
            const player = ProvidePlayerData(parseInt(playerId, 10), this.provider.playerInfoRepository, this.provider.playerStateRepository)
            this.gameScene.addPlayers([player])
            
            console.log(`[Game addPlayer] player added to scene with id: ${playerId}`)
        } catch (error) {
            console.log(`[Game addPlayer] ERROR: ${error}`)
        }
    }


}