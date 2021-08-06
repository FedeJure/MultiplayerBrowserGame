import { ClientPresenterProvider } from "./infrastructure/clientPresenterProvider";
import { ConnectedPlayersRepository } from "./infrastructure/repositories/connectedPlayersRepository";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";


export class ClientProvider {
    private static _presenterProvider: ClientPresenterProvider
    private static _serverConnection: SocketServerConnection
    private static _localPlayerId: string
    private static _connectedPlayers: ConnectedPlayersRepository

    public static Init(
        presenterProvider: ClientPresenterProvider,
        serverConnection: SocketServerConnection,
        localPlayerId: string,
        playerStates: ConnectedPlayersRepository) {

        ClientProvider._presenterProvider = presenterProvider
        ClientProvider._serverConnection = serverConnection
        ClientProvider._localPlayerId = localPlayerId
        ClientProvider._connectedPlayers = playerStates
    }

    public static get presenterProvider(): ClientPresenterProvider { return ClientProvider._presenterProvider }
    public static get serverConnection(): SocketServerConnection { return ClientProvider._serverConnection }
    public static get localPlayerId(): string { return ClientProvider._localPlayerId }
    public static get connectedPlayers(): ConnectedPlayersRepository { return ClientProvider._connectedPlayers }
}