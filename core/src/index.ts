import { Server, Socket } from "socket.io";
import { ServerGame } from "./presentation/serverGamePresenter";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents"
import { DefaultCoreProviderInstance, Provider } from "./coreProvider";
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

export const InitGame: (socket: Socket) => void = (socket: Socket) => {

        const scene = new GameScene()
        const config = {...ServerConfig, scene: scene}
        const phaserGame = new Phaser.Game(config)

        Provider.Init(
            new ConnectionsRepository(),
            new InMemoryPlayerRepository(),
            new InMemoryPlayerStateRepository(),
            new ClientPresenterProvider()
        )
        
        DefaultCoreProviderInstance.playerInfoRepository.addPlayer("1", { id: "1", name: "Test Player 1" })
        DefaultCoreProviderInstance.playerStateRepository.setPlayerState("1", new PlayerState(0, 0, 100, 2))

        DefaultCoreProviderInstance.playerInfoRepository.addPlayer("2", { id: "2", name: "Test Player 2" })
        DefaultCoreProviderInstance.playerStateRepository.setPlayerState("2", new PlayerState(-50, 0, 100, 2))
        const room = new SocketRoomConnection(socket, "main")
        const game = new ServerGame(scene, DefaultCoreProviderInstance, room);
    
        socket.on(SocketIOEvents.CONNECTION, (clientSocket: Socket) => {
            const connection = new SocketClientConnection(clientSocket)
            room.join(connection)
            DefaultCoreProviderInstance.connectionsRepository.addConnection(connection)
            Log("InitServerGame",`[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${clientSocket.id}`)

            clientSocket.on(SocketIOEvents.DISCONNECT, () => {
                DefaultCoreProviderInstance.connectionsRepository.removeConnection(connection.connectionId)
                Log("InitServerGame",`[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${clientSocket.id}`)
            })

        })


    }

export const InitClientGame = (socket: ClientSocket, localPlayerId: string) => {
        Provider.Init(
            new ConnectionsRepository(),
            new InMemoryPlayerRepository(),
            new InMemoryPlayerStateRepository(),
            new ClientPresenterProvider()
        )
        const scene = new GameScene()
        const connectionWithServer = new SocketServerConnection(socket)
        const config = {...ClientConfig, scene: [new LoadScene(), scene, new GameplayHud(connectionWithServer)]}
        const phaserGame = new Phaser.Game(config)
        const game = new ClientGamePresenter(localPlayerId, DefaultCoreProviderInstance, connectionWithServer, scene);
    }