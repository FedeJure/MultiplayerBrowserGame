import { Player } from "../../domain/player";
import { PlayerState } from "../../domain/playerState";
import { PlayerInfoRepository } from "../../infrastructure/repositories/playerInfoRepository"
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { GameScene } from "../../view/GameScene";
import { PlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../playerConfiguration";

export function ProvidePlayerData(
    playerId: number,
    playerInfoRepository: PlayerInfoRepository,
    playerStateRepository: PlayerStateRepository,
    scene: GameScene) : Player {

        const playerInfo = playerInfoRepository.getPlayer(playerId)
        if (playerInfo === undefined) throw new Error(`Player with ID: ${playerId} not found`)
        var playerState = playerStateRepository.getPlayerState(playerId)
        if (playerState === undefined) {
            playerState = new PlayerState( 
                DefaultConfiguration.initialX,
                DefaultConfiguration.initialY, DefaultConfiguration.initialLife,
                DefaultConfiguration.initialJumps )
        }
        const view = new PlayerView(scene, playerState.position.x, playerState.position.y)

        return new Player(DefaultConfiguration, playerInfo, playerState, view)

}