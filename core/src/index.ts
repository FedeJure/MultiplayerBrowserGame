import { Socket } from "socket.io";
import { Game } from "./domain/game";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository"
import { GameScene } from "./scenes/GameScene";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { ClientConnection } from "./domain/clientConnection"

var game : Game

export const InitGame = (gameScene: GameScene, socket: Socket) => {

    socket.on(SocketIOEvents.CONNECTION, (client: any) => {
        //save connection in repository
        const connection: ClientConnection = {
            connectionId: client.client.id,
            connectionTime: new Date()
        }
        console.log(`[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${client.client.id}`)
        client.on(SocketIOEvents.DISCONNECT, () => {
            console.log(`[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${client.client.id}`)
        })
    })

    var inMemoryRepository = new InMemoryPlayerRepository();
    game = new Game(gameScene, inMemoryRepository);
}


export const ConnectNewUser = (name: String) => {
    if (!game) throw new Error("No game running!");
    
}