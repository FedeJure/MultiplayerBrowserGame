import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { PresenterProvider } from "./presentation/presenterProvider"


export class Provider {
    private static _connectionsRepository: ConnectionsRepository
    private static _playerInfoRepository: PlayerInfoRepository
    private static _playerStateRepository: PlayerStateRepository
    private static _presenterProvider: PresenterProvider

    public static ServierInit(connections: ConnectionsRepository,
        playerInfos: PlayerInfoRepository,
        playerStates: PlayerStateRepository,
        presenterProvider: PresenterProvider) {
            Provider._connectionsRepository = connections
            Provider._playerInfoRepository = playerInfos
            Provider._playerStateRepository = playerStates
            Provider._presenterProvider = presenterProvider
    }

    public static ClientInit(
        presenterProvider: PresenterProvider) {
            Provider._presenterProvider = presenterProvider
    }

    public static get connectionsRepository(): ConnectionsRepository { return Provider._connectionsRepository }
    public static get playerInfoRepository(): PlayerInfoRepository { return Provider._playerInfoRepository }
    public static get playerStateRepository(): PlayerStateRepository { return Provider._playerStateRepository }
    public static get presenterProvider(): PresenterProvider { return Provider._presenterProvider }
}