import { Socket } from "socket.io";
import { Socket as ClientSocket } from "socket.io-client";
export declare const InitGame: (socket: Socket) => void;
export declare const InitClientGame: (socket: ClientSocket) => void;
