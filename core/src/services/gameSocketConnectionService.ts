import { Socket } from "socket.io";
import { PlayerRepository } from "../infrastructure/repositories/playerRepository";
import { GameEvents } from "../infrastructure/events/gameEvents";

export class GameSocketConnectionService {

    constructor(socket: Socket, playerRepository: PlayerRepository) {
        socket.on(GameEvents.PLAYER_CONNECTED, this.processPlayerConnected);
    }

    private processPlayerConnected(data: any) {
        console.log(data)
    }
}