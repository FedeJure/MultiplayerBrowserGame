import { Player } from "../../domain/player/player";
import { GameScene } from "../../view/scenes/GameScene";
import { PhaserPlayerView } from "../../view/playerView";
import { DefaultConfiguration } from "../player/playerConfiguration";
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
            playerState = {
                life: DefaultConfiguration.initialLife,
                jumpsAvailable: DefaultConfiguration.jumps,
                inInertia: false,
                position: { x: DefaultConfiguration.initialX, y: DefaultConfiguration.initialY },
                velocity: { x: 0, y: 0 },
                canMove: true
            } 
        }
        const view = new PhaserPlayerView(scene, playerState.position.x, playerState.position.y, DefaultConfiguration.height, DefaultConfiguration.width)
        scene.addToLifecycle(view)
        ServerProvider.presenterProvider.forPlayer(view, new PlayerSocketInput(playerId, connection))
        return new Player(playerInfo, playerState, view)

}