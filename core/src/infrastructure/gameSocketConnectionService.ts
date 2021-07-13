import { Socket } from "socket.io";
import { PlayerRepository } from "./playerRepository";
import { GameEvents } from "./events/gameEvents";

export class GameSocketConnectionService {

    constructor(socket: Socket, playerRepository: PlayerRepository) {
        socket.on(GameEvents.PLAYER_CONNECTED, this.processPlayerConnected);
    }

    private processPlayerConnected(data: any) {
        console.log(data)
    }
}