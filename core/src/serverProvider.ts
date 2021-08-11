import { DependencyManager } from "./infrastructure/dependencyManager";
import { ConnectedPlayersRepository } from "./infrastructure/repositories/connectedPlayersRepository";
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository";
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { ServerPresenterProvider } from "./infrastructure/serverPresenterProvider";


export class ServerProvider {
    public static get connectionsRepository(): ConnectionsRepository { return DependencyManager.GetOrInstantiate<ConnectionsRepository>(() => new ConnectionsRepository()) }
    public static get playerInfoRepository(): PlayerInfoRepository { return DependencyManager.GetOrInstantiate<PlayerInfoRepository>(() => new InMemoryPlayerRepository())  }
    public static get playerStateRepository(): PlayerStateRepository { return DependencyManager.GetOrInstantiate<PlayerStateRepository>(() => new InMemoryPlayerStateRepository())  }
    public static get presenterProvider(): ServerPresenterProvider { return DependencyManager.GetOrInstantiate<ServerPresenterProvider>(() => new ServerPresenterProvider())  }
    public static get connectedPlayerRepository(): ConnectedPlayersRepository { return DependencyManager.GetOrInstantiate<ConnectedPlayersRepository>(() => new ConnectedPlayersRepository())  }
}