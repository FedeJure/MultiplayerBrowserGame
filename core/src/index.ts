import { Server, Socket } from "socket.io";
import { ServerGame } from "./domain/serverGame";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { DefaultCoreProviderInstance } from "./coreProvider";
import { GameScene } from "./view/GameScene";
import { ClientGame } from "./domain/clientGame";
import { Socket as ClientSocket } from "socket.io-client";
import { SocketClientConnection } from "./infrastructure/socketClientConnection";
import { ClientConfig, ServerConfig } from "./view/DefaultGameConfigs";

export const InitGame: (socket: Socket) => void = (socket: Socket) => {

        const scene = new GameScene()
        const config = {...ServerConfig, scene}
        const phaserGame = new Phaser.Game(config)
        DefaultCoreProviderInstance.playerInfoRepository.addPlayer(1, { id: 1, name: "Test Player" })
        const game = new ServerGame(config.scene, DefaultCoreProviderInstance);
    
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

export const InitClientGame: (socket: ClientSocket) => void = (socket: ClientSocket) => {
        const scene = new GameScene()
        const config = {...ClientConfig, scene}
        const phaserGame = new Phaser.Game(config)
        const game = new ClientGame(DefaultCoreProviderInstance, socket, scene);
    }