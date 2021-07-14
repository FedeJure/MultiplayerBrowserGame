import { Player } from "../../domain/player";
import { PlayerInfoRepository } from "../../infrastructure/repositories/playerInfoRepository";
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
export declare function ProvidePlayerData(playerId: number, playerInfoRepository: PlayerInfoRepository, playerStateRepository: PlayerStateRepository): Player;
