import { Server, Socket } from "socket.io";
import { ServerGame } from "./domain/serverGame";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository"
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository"
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { ClientConnection } from "./domain/clientConnection"
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository"
import { DefaultCoreProviderInstance } from "./coreProvider";
import { GameScene } from "./view/GameScene";
import { GameConfig } from "./view/gameConfig";
import { ClientGame } from "./domain/clientGame";
import { GameEvents } from "./infrastructure/events/gameEvents";
import { Client } from "socket.io/dist/client";
import { Socket as ClientSocket } from "socket.io-client";
import { SocketClientConnection } from "./infrastructure/socketClientConnection";
import { Scene } from "phaser";
import { ClientConfig, ServerConfig } from "./view/DefaultGameConfigs";
import { ClientGameScene } from "./view/ClientGameScene";

export const InitGame: (socket: Socket) => void = (socket: Socket) => {

        const scene = new GameScene
        const config = {...ServerConfig, scene}
        const phaserGame = new Phaser.Game(config)
        const game = new ServerGame(config.scene, DefaultCoreProviderInstance);

        socket.on(SocketIOEvents.CONNECTION, (clientSocket: ClientSocket) => {
            //save connection in repository

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
        const scene = new ClientGameScene()
        const config = {...ClientConfig, scene}
        const phaserGame = new Phaser.Game(config)
        const game = new ClientGame(DefaultCoreProviderInstance, socket);
    }