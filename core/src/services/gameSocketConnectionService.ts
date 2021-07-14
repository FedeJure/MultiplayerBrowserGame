import { Socket } from "socket.io";
import { GameEvents } from "../infrastructure/events/gameEvents";

export class GameSocketConnectionService {

    constructor(socket: Socket) {
        socket.on(GameEvents.PLAYER_CONNECTED, this.processPlayerConnected);
    }

    private processPlayerConnected(data: any) {
        console.log(data)
    }
}