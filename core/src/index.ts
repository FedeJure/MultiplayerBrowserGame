import { Server, Socket } from "socket.io";
import { ServerGame } from "./presentation/serverGamePresenter";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { DefaultCoreProviderInstance } from "./coreProvider";
import { GameScene } from "./view/GameScene";
import { ClientGame } from "./presentation/clientGamePresenter";
import { Socket as ClientSocket } from "socket.io-client";
import { SocketClientConnection } from "./infrastructure/socketClientConnection";
import { ClientConfig, ServerConfig } from "./view/DefaultGameConfigs";
import { PlayerState } from "./domain/playerState";
import { LoadScene } from "./view/LoadScene";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";

export const InitGame: (socket: Socket) => void = (socket: Socket) => {

        const scene = new GameScene()
        const config = {...ServerConfig, scene: scene}
        const phaserGame = new Phaser.Game(config)
        console.log(phaserGame.config)
        
        DefaultCoreProviderInstance.playerInfoRepository.addPlayer("1", { id: "1", name: "Test Player" })
        DefaultCoreProviderInstance.playerStateRepository.setPlayerState("1", new PlayerState(25, 0, 100, 2))
        const game = new ServerGame(scene, DefaultCoreProviderInstance);
    
        socket.on(SocketIOEvents.CONNECTION, (clientSocket: ClientSocket) => {
            const connection = new SocketClientConnection(clientSocket)

            DefaultCoreProviderInstance.connectionsRepository.addConnection(connection)
            console.log(`[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${clientSocket.id}`)

            clientSocket.on(SocketIOEvents.DISCONNECT, () => {
                DefaultCoreProviderInstance.connectionsRepository.removeConnection(connection.connectionId)
                console.log(`[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${clientSocket.id}`)
            })

        })


    }

export const InitClientGame = (socket: ClientSocket, localPlayerId: string) => {
        const scene = new GameScene()
        const config = {...ClientConfig, scene: [new LoadScene(), scene]}
        const phaserGame = new Phaser.Game(config)
        console.log(phaserGame.config)
        const game = new ClientGame(localPlayerId, DefaultCoreProviderInstance, new SocketServerConnection(socket), scene);
    }