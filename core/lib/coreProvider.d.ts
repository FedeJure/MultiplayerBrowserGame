import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { PlayerInfoRepository } from "./infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "./infrastructure/repositories/playerStateRepository";
import { PlayerViewRepository } from "./infrastructure/repositories/playerViewRepository";
export interface CoreProvider {
    readonly connectionsRepository: ConnectionsRepository;
    readonly playerInfoRepository: PlayerInfoRepository;
    readonly playerStateRepository: PlayerStateRepository;
    readonly playerViewRepository: PlayerViewRepository;
}
export declare class DefaultCoreProvider implements CoreProvider {
    readonly connectionsRepository: ConnectionsRepository;
    readonly playerInfoRepository: PlayerInfoRepository;
    readonly playerStateRepository: PlayerStateRepository;
    readonly playerViewRepository: PlayerViewRepository;
    constructor();
}
export declare const DefaultCoreProviderInstance: DefaultCoreProvider;
