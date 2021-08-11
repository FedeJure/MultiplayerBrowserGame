import { ClientPresenterProvider } from "./infrastructure/clientPresenterProvider";
import { DependencyManager } from "./infrastructure/dependencyManager";
import { ConnectedPlayersRepository } from "./infrastructure/repositories/connectedPlayersRepository";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";


export class ClientProvider {
    private static _serverConnection: SocketServerConnection
    private static _localPlayerId: string

    public static Init(
        serverConnection: SocketServerConnection,
        localPlayerId: string) {

        ClientProvider._serverConnection = serverConnection
        ClientProvider._localPlayerId = localPlayerId
    }

    public static get presenterProvider(): ClientPresenterProvider { return DependencyManager.GetOrInstantiate<ClientPresenterProvider>(() => new ClientPresenterProvider()) }
    public static get serverConnection(): SocketServerConnection { return ClientProvider._serverConnection }
    public static get localPlayerId(): string { return ClientProvider._localPlayerId }
    public static get connectedPlayers(): ConnectedPlayersRepository { return DependencyManager.GetOrInstantiate<ConnectedPlayersRepository>(() => new ConnectedPlayersRepository()) }
}