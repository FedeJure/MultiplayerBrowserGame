import { ConnectedPlayersRepository } from "./infrastructure/repositories/connectedPlayersRepository";
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { ServerPresenterProvider } from "./infrastructure/serverPresenterProvider";


export class ServerProvider {
    private static _connectionsRepository: ConnectionsRepository
    private static _playerInfoRepository: PlayerInfoRepository
    private static _playerStateRepository: PlayerStateRepository
    private static _presenterProvider: ServerPresenterProvider
    private static _connectedPlayersRepository : ConnectedPlayersRepository

    public static Init(connections: ConnectionsRepository,
        playerInfos: PlayerInfoRepository,
        playerStates: PlayerStateRepository,
        presenterProvider: ServerPresenterProvider,
        connectedPlayersrepository: ConnectedPlayersRepository) {
            ServerProvider._connectionsRepository = connections
            ServerProvider._playerInfoRepository = playerInfos
            ServerProvider._playerStateRepository = playerStates
            ServerProvider._presenterProvider = presenterProvider
            ServerProvider._connectedPlayersRepository = connectedPlayersrepository
    }

    public static get connectionsRepository(): ConnectionsRepository { return ServerProvider._connectionsRepository }
    public static get playerInfoRepository(): PlayerInfoRepository { return ServerProvider._playerInfoRepository }
    public static get playerStateRepository(): PlayerStateRepository { return ServerProvider._playerStateRepository }
    public static get presenterProvider(): ServerPresenterProvider { return ServerProvider._presenterProvider }
    public static get connectedPlayerRepository(): ConnectedPlayersRepository { return ServerProvider._connectedPlayersRepository }
}