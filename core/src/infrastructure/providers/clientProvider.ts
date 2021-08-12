import { ClientPresenterProvider } from "./clientPresenterProvider";
import { DependencyManager } from "../dependencyManager";
import { ConnectedPlayersRepository } from "../repositories/connectedPlayersRepository";
import { LocalPlayerRepository } from "../repositories/localPlayerRepository";
import { SocketServerConnection } from "../socketServerConnection";

export class ClientProvider {
  private static _serverConnection: SocketServerConnection;
  private static _localPlayerRepository: LocalPlayerRepository;

  public static Init(
    serverConnection: SocketServerConnection,
    localPlayerRepository: LocalPlayerRepository
  ) {
    ClientProvider._serverConnection = serverConnection;
    ClientProvider._localPlayerRepository = localPlayerRepository;
  }

  public static get presenterProvider(): ClientPresenterProvider {
    return DependencyManager.GetOrInstantiate<ClientPresenterProvider>(
      () => new ClientPresenterProvider()
    );
  }
  public static get serverConnection(): SocketServerConnection {
    return ClientProvider._serverConnection;
  }
  public static get localPlayerRepository(): LocalPlayerRepository {
    return ClientProvider._localPlayerRepository;
  }
  public static get connectedPlayers(): ConnectedPlayersRepository {
    return DependencyManager.GetOrInstantiate<ConnectedPlayersRepository>(
      () => new ConnectedPlayersRepository()
    );
  }
}
