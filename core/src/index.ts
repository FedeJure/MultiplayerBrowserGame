import { Socket } from "socket.io";
import { ServerGamePresenter } from "./presentation/serverGamePresenter";
import { SocketIOEvents } from "./infrastructure/events/socketIoEvents";
import { ServerProvider } from "./infrastructure/providers/serverProvider";
import { ClientProvider } from "./infrastructure/providers/clientProvider";
import { GameScene } from "./view/scenes/GameScene";
import { Socket as ClientSocket } from "socket.io-client";
import { SocketClientConnection } from "./infrastructure/socketClientConnection";
import { ClientConfig, ServerConfig } from "./view/DefaultGameConfigs";
import { LoadScene } from "./view/scenes/LoadScene";
import { SocketServerConnection } from "./infrastructure/socketServerConnection";
import { SocketRoomConnection } from "./infrastructure/socketRoomConnection";
import { Log } from "./infrastructure/Logger";
import { GameplayHud } from "./view/scenes/GameplayHud";
import { LocalPlayerRepository } from "./infrastructure/repositories/localPlayerRepository";
import { ActionProvider } from "./infrastructure/providers/actionProvider";

export const InitGame: (socket: Socket) => void = (socket: Socket) => {
  const scene = new GameScene(ServerProvider.collisionsDispatcher);
  const config = { ...ServerConfig, scene: scene };
  const phaserGame = new Phaser.Game(config);

  console.log("-----------", ServerProvider.playerInfoRepository);

  ServerProvider.playerInfoRepository.addPlayer("1", {
    id: "1",
    name: "Test Player 1",
  });
  ServerProvider.playerStateRepository.setPlayerState("1", {
    life: 100,
    jumpsAvailable: 2,
    inInertia: false,
    position: { x: 100, y: 0 },
    velocity: { x: 0, y: 0 },
    canMove: true,
    canJump: true
  });

  ServerProvider.playerInfoRepository.addPlayer("2", {
    id: "2",
    name: "Test Player 2",
  });
  ServerProvider.playerStateRepository.setPlayerState("2", {
    life: 100,
    jumpsAvailable: 2,
    inInertia: false,
    position: { x: -50, y: 0 },
    velocity: { x: 0, y: 0 },
    canMove: true,
    canJump: true
  });

  const room = new SocketRoomConnection(socket, "main");
  const game = new ServerGamePresenter(scene,
    room,
    ActionProvider.CreatePlayerFromId,
    ServerProvider.connectionsRepository,
    ServerProvider.connectedPlayerRepository,
    ServerProvider.playerStateRepository);
  socket.on(SocketIOEvents.CONNECTION, (clientSocket: Socket) => {
    const emitFn = clientSocket.emit;
    clientSocket.emit = function (...args) {
      setTimeout(() => {
        return emitFn.apply(clientSocket, args);
      }, 500);
      return true;
    };
    const connection = new SocketClientConnection(clientSocket);
    room.join(connection);
    ServerProvider.connectionsRepository.addConnection(connection);
    Log(
      "InitServerGame",
      `[Event: ${SocketIOEvents.CONNECTION}] :: with connection id: ${clientSocket.id}`
    );

    clientSocket.on(SocketIOEvents.DISCONNECT, () => {
      ServerProvider.connectionsRepository.removeConnection(
        connection.connectionId
      );
      Log(
        "InitServerGame",
        `[Event: ${SocketIOEvents.DISCONNECT}] :: with connection id: ${clientSocket.id}`
      );
    });
  });
};

export const InitClientGame = (socket: ClientSocket, localPlayerId: string) => {
  const connectionWithServer = new SocketServerConnection(socket);
  ClientProvider.Init(
    connectionWithServer,
    new LocalPlayerRepository(localPlayerId)
  );
  const scene = new GameScene(ClientProvider.collisionsDispatcher);
  const config = {
    ...ClientConfig,
    scene: [new LoadScene(), scene, new GameplayHud(connectionWithServer)],
  };
  new Phaser.Game(config);
  ClientProvider.presenterProvider.forGameplay(scene)
};