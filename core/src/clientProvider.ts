import { SocketServerConnection } from "./infrastructure/socketServerConnection";
import { PresenterProvider } from "./presentation/presenterProvider"


export class ClientProvider {
    private static _presenterProvider: PresenterProvider
    private static _serverConnection: SocketServerConnection

    public static Init(
        presenterProvider: PresenterProvider,
        serverConnection: SocketServerConnection) {
            ClientProvider._presenterProvider = presenterProvider
            ClientProvider._serverConnection = serverConnection
    }

    public static get presenterProvider(): PresenterProvider { return ClientProvider._presenterProvider }
    public static get serverConnection(): SocketServerConnection { return ClientProvider._serverConnection }
}