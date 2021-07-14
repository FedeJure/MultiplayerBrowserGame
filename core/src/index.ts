import { Socket } from "socket.io";
import { Game } from "./domain/game";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository"
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository"
import { GameScene } from "./scenes/GameScene";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { ClientConnection } from "./domain/clientConnection"
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository"

var game : Game

export const InitGame = (gameScene: GameScene, socket: Socket) => {

    const connectionsRepository = new ConnectionsRepository() 

    socket.on(SocketIOEvents.CONNECTION, (client: any) => {
        //save connection in repository
        const connection: ClientConnection = {
            connectionId: client.client.id,
            connectionTime: new Date()
        }
        connectionsRepository.addConnection(connection)
        console.log(`[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${client.client.id}`)
        client.on(SocketIOEvents.DISCONNECT, () => {
            connectionsRepository.removeConnection(connection.connectionId)
            console.log(`[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${client.client.id}`)
        })
    })

    var inMemoryPlayerInfoRepository = new InMemoryPlayerRepository();
    var inMemoryPlayerStateRepository = new InMemoryPlayerStateRepository();
    game = new Game(gameScene,
        inMemoryPlayerInfoRepository,
        inMemoryPlayerStateRepository,
        connectionsRepository,
        socket);
}


export const ConnectNewUser = (name: String) => {
    if (!game) throw new Error("No game running!");
    
}