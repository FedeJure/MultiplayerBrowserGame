import { Player } from "../../domain/player";
import { PlayerState } from "../../domain/playerState";
import { PlayerInfoRepository } from "../../infrastructure/repositories/playerInfoRepository"
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { DefaultConfiguration } from "../playerConfiguration";

export function ProvidePlayerData(
    playerId: number,
    playerInfoRepository: PlayerInfoRepository,
    playerStateRepository: PlayerStateRepository) : Player {

        const playerInfo = playerInfoRepository.getPlayer(playerId)
        if (playerInfo === undefined) throw new Error(`Player with ID: ${playerId} not found`)
        var playerState = playerStateRepository.getPlayerState(playerId)
        if (playerState === undefined) {
            playerState = new PlayerState( 
                DefaultConfiguration.initialX,
                DefaultConfiguration.initialY, DefaultConfiguration.initialLife,
                DefaultConfiguration.initialJumps )
        }

        return new Player(DefaultConfiguration, playerInfo, playerState)

}