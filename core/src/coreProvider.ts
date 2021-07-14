import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { PlayerViewRepository } from "./infrastructure/repositories/playerViewRepository";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository";
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository";

export interface CoreProvider {
    readonly connectionsRepository: ConnectionsRepository
    readonly playerInfoRepository: PlayerInfoRepository
    readonly playerStateRepository: PlayerStateRepository
    readonly playerViewRepository: PlayerViewRepository
}


export class DefaultCoreProvider implements CoreProvider {
    public readonly connectionsRepository: ConnectionsRepository
    public readonly playerInfoRepository: PlayerInfoRepository
    public readonly playerStateRepository: PlayerStateRepository
    public readonly playerViewRepository: PlayerViewRepository

    constructor() {
        this.connectionsRepository = new ConnectionsRepository()
        this.playerInfoRepository = new InMemoryPlayerRepository()
        this.playerStateRepository = new InMemoryPlayerStateRepository()
        this.playerViewRepository = new PlayerViewRepository();
    }
}

export const DefaultCoreProviderInstance = new DefaultCoreProvider();
