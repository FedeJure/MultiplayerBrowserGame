import { Socket } from "socket.io";
import { GameScene } from "./scenes/GameScene";
export declare const InitGame: (gameScene: GameScene, socket: Socket) => void;
export declare const ConnectNewUser: (name: String) => void;
