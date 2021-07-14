import { Socket } from "socket.io";
import { GameScene } from "./view/GameScene";
export declare const InitGame: (gameScene: GameScene, socket: Socket) => void;
export declare const ConnectNewUser: (name: String) => void;
