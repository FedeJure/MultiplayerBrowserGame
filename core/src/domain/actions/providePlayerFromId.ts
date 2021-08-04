import { Player } from "../../domain/player";
import { PlayerState } from "../../domain/playerState";
import { GameScene } from "../../view/scenes/GameScene";
import { PlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../playerConfiguration";
import { ServerProvider } from "../../serverProvider";
import { ClientConnection } from "../clientConnection";
import { PlayerSocketInput } from "../../infrastructure/input/playerSocketInput";

export function ProvidePlayerFromId(
    playerId: string,
    scene: GameScene,
    connection: ClientConnection) : Player {
        const playerInfo = ServerProvider.playerInfoRepository.getPlayer(playerId)
        if (playerInfo === undefined) throw new Error(`Player with ID: ${playerId} not found`)
        var playerState = ServerProvider.playerStateRepository.getPlayerState(playerId)
        if (playerState === undefined) {
            playerState = new PlayerState( 
                DefaultConfiguration.initialX,
                DefaultConfiguration.initialY, DefaultConfiguration.initialLife,
                DefaultConfiguration.initialJumps )
        }
        const view = new PlayerView(scene, playerState.position.x, playerState.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
        ServerProvider.presenterProvider.forPlayer(view, new PlayerSocketInput(playerId, connection))
        return new Player(DefaultConfiguration, playerInfo, playerState, view)

}