import { Socket } from "socket.io";
import { GameScene } from "./view/GameScene";
import { GameConfig } from "./view/gameConfig";
import { Socket as ClientSocket } from "socket.io-client";
export declare const InitGame: (gameConfig: GameConfig, gameScene: GameScene, socket: Socket) => void;
export declare const InitClientGame: (gameConfig: GameConfig, gameScene: GameScene, socket: ClientSocket) => void;
export declare const ConnectNewUser: (name: String) => void;
