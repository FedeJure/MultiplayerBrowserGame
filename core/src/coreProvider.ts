import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository";
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository";
import { PresenterProvider } from "./presentation/presenterProvider"
// export interface CoreProvider {
//     readonly connectionsRepository: ConnectionsRepository
//     readonly playerInfoRepository: PlayerInfoRepository
//     readonly playerStateRepository: PlayerStateRepository
// }


// export class DefaultCoreProvider implements CoreProvider {
//     public readonly connectionsRepository: ConnectionsRepository
//     public readonly playerInfoRepository: PlayerInfoRepository
//     public readonly playerStateRepository: PlayerStateRepository

//     constructor() {
//         this.connectionsRepository = new ConnectionsRepository()
//         this.playerInfoRepository = new InMemoryPlayerRepository()
//         this.playerStateRepository = new InMemoryPlayerStateRepository()
//     }
// }

export class Provider {
    private static _connectionsRepository: ConnectionsRepository
    private static _playerInfoRepository: PlayerInfoRepository
    private static _playerStateRepository: PlayerStateRepository
    private static _presenterProvider: PresenterProvider

    public static Init(connections: ConnectionsRepository,
        playerInfos: PlayerInfoRepository,
        playerStates: PlayerStateRepository,
        presenterProvider: PresenterProvider) {
            Provider._connectionsRepository = connections
            Provider._playerInfoRepository = playerInfos
            Provider._playerStateRepository = playerStates
            Provider._presenterProvider = presenterProvider
        }

    public static get connectionsRepository(): ConnectionsRepository { return Provider._connectionsRepository }
    public static get playerInfoRepository(): PlayerInfoRepository { return Provider._playerInfoRepository }
    public static get playerStateRepository(): PlayerStateRepository { return Provider._playerStateRepository }
    public static get presenterProvider(): PresenterProvider { return Provider._presenterProvider }
}

// export const DefaultCoreProviderInstance = new DefaultCoreProvider();
