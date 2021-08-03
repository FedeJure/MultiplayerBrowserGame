import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { PresenterProvider } from "./presentation/presenterProvider"


export class ServerProvider {
    private static _connectionsRepository: ConnectionsRepository
    private static _playerInfoRepository: PlayerInfoRepository
    private static _playerStateRepository: PlayerStateRepository
    private static _presenterProvider: PresenterProvider

    public static Init(connections: ConnectionsRepository,
        playerInfos: PlayerInfoRepository,
        playerStates: PlayerStateRepository,
        presenterProvider: PresenterProvider) {
            ServerProvider._connectionsRepository = connections
            ServerProvider._playerInfoRepository = playerInfos
            ServerProvider._playerStateRepository = playerStates
            ServerProvider._presenterProvider = presenterProvider
    }

    public static get connectionsRepository(): ConnectionsRepository { return ServerProvider._connectionsRepository }
    public static get playerInfoRepository(): PlayerInfoRepository { return ServerProvider._playerInfoRepository }
    public static get playerStateRepository(): PlayerStateRepository { return ServerProvider._playerStateRepository }
    public static get presenterProvider(): PresenterProvider { return ServerProvider._presenterProvider }
}