import { Socket } from "socket.io";
import { PlayerRepository } from "./playerRepository";
export declare class GameSocketConnectionService {
    constructor(socket: Socket, playerRepository: PlayerRepository);
    private processPlayerConnected;
}
