import { Socket } from "socket.io";
import { Game } from "./domain/game";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository"
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository"
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { ClientConnection } from "./domain/clientConnection"
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository"
import { DefaultCoreProviderInstance } from "./coreProvider";
import { GameScene } from "./view/GameScene";
import { GameConfig } from "./view/gameConfig";
import { Socket as ClientSocket } from "socket.io-client";

var game: Game

export const InitGame: (gameConfig: GameConfig, gameScene: GameScene, socket: Socket) => void
    = (gameConfig: GameConfig, gameScene: GameScene, socket: Socket) => {

        socket.on(SocketIOEvents.CONNECTION, (client: any) => {
            //save connection in repository
            const connection: ClientConnection = {
                connectionId: client.client.id,
                connectionTime: new Date()
            }
            DefaultCoreProviderInstance.connectionsRepository.addConnection(connection)
            console.log(`[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${client.client.id}`)
            client.on(SocketIOEvents.DISCONNECT, () => {
                DefaultCoreProviderInstance.connectionsRepository.removeConnection(connection.connectionId)
                console.log(`[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${client.client.id}`)
            })
        })
        game = new Game(gameConfig,
            gameScene,
            DefaultCoreProviderInstance,
            socket);
    }

export const InitClientGame: (gameConfig: GameConfig, gameScene: GameScene, socket: ClientSocket) => void
    = (gameConfig: GameConfig, gameScene: GameScene, socket: ClientSocket) => {
        game = new Game(gameConfig,
            gameScene,
            DefaultCoreProviderInstance,
            socket);
    }


export const ConnectNewUser = (name: String) => {
    if (!game) throw new Error("No game running!");

}