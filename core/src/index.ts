import { Server, Socket } from "socket.io";
import { ServerGame } from "./presentation/serverGamePresenter";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { ServerProvider } from "./serverProvider";
import { ClientProvider } from "./clientProvider";
import { GameScene } from "./view/scenes/GameScene";
import { ClientGamePresenter } from "./presentation/clientGamePresenter";
import { Socket as ClientSocket } from "socket.io-client";
import { SocketClientConnection } from "./infrastructure/socketClientConnection";
import { ClientConfig, ServerConfig } from "./view/DefaultGameConfigs";
import { PlayerState } from "./domain/playerState";
import { LoadScene } from "./view/scenes/LoadScene";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";
import { SocketRoomConnection } from "./infrastructure/socketRoomConnection";
import { Log } from "./infrastructure/Logger";
import { GameplayHud } from "./view/scenes/GameplayHud";
import { ConnectionsRepository } from "./infrastructure/repositories/connectionsRepository";
import { InMemoryPlayerRepository } from "./infrastructure/repositories/inMemoryPlayerRepository";
import { InMemoryPlayerStateRepository } from "./infrastructure/repositories/inMemoryPlayerStateRepository";
import { ClientPresenterProvider } from "./infrastructure/clientPresenterProvider"
import { ServerPresenterProvider } from "./infrastructure/serverPresenterProvider"

export const InitGame: (socket: Socket) => void = (socket: Socket) => {

    ServerProvider.Init(
        new ConnectionsRepository(),
        new InMemoryPlayerRepository(),
        new InMemoryPlayerStateRepository(),
        new ServerPresenterProvider()
    )

    const scene = new GameScene()
    const config = { ...ServerConfig, scene: scene }
    const phaserGame = new Phaser.Game(config)

    ServerProvider.playerInfoRepository.addPlayer("1", { id: "1", name: "Test Player 1" })
    ServerProvider.playerStateRepository.setPlayerState("1", new PlayerState(0, 0, 100, 2))

    ServerProvider.playerInfoRepository.addPlayer("2", { id: "2", name: "Test Player 2" })
    ServerProvider.playerStateRepository.setPlayerState("2", new PlayerState(-50, 0, 100, 2))

    const room = new SocketRoomConnection(socket, "main")
    const game = new ServerGame(scene, room);
    socket.on(SocketIOEvents.CONNECTION, (clientSocket: Socket) => {
        const connection = new SocketClientConnection(clientSocket)
        room.join(connection)
        ServerProvider.connectionsRepository.addConnection(connection)
        Log("InitServerGame", `[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${clientSocket.id}`)

        clientSocket.on(SocketIOEvents.DISCONNECT, () => {
            ServerProvider.connectionsRepository.removeConnection(connection.connectionId)
            Log("InitServerGame", `[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${clientSocket.id}`)
        })

    })
}

export const InitClientGame = (socket: ClientSocket, localPlayerId: string) => {
    const connectionWithServer = new SocketServerConnection(socket)    
    ClientProvider.Init(
        new ClientPresenterProvider(),
        connectionWithServer
    )
    const scene = new GameScene()    
    const config = { ...ClientConfig, scene: [new LoadScene(), scene, new GameplayHud(connectionWithServer)] }
    const phaserGame = new Phaser.Game(config)
    const game = new ClientGamePresenter(localPlayerId, connectionWithServer, scene);
}