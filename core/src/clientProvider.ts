import { ClientPresenterProvider } from "./infrastructure/clientPresenterProvider";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";
import { PresenterProvider } from "./presentation/presenterProvider"


export class ClientProvider {
    private static _presenterProvider: ClientPresenterProvider
    private static _serverConnection: SocketServerConnection
    private static _localPlayerId: string

    public static Init(
        presenterProvider: ClientPresenterProvider,
        serverConnection: SocketServerConnection,
        localPlayerId: string) {
            ClientProvider._presenterProvider = presenterProvider
            ClientProvider._serverConnection = serverConnection
            ClientProvider._localPlayerId = localPlayerId
    }

    public static get presenterProvider(): ClientPresenterProvider { return ClientProvider._presenterProvider }
    public static get serverConnection(): SocketServerConnection { return ClientProvider._serverConnection }
    public static get localPlayerId(): string { return ClientProvider._localPlayerId }
}