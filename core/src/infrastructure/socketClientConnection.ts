import { Subject } from "rxjs";
import { Socket } from "socket.io";
import { ClientConnection } from "../domain/clientConnection";
import {GameEvents, PlayerConnectedEvent} from "./events/gameEvents"
import { PlayerStateDto } from "./dtos/playerStateDTO";
import { Log } from "./Logger";

export class SocketClientConnection implements ClientConnection {

    public readonly socket: Socket;
    public readonly connectionId: string;
    public readonly connectionTime: Date;

    private onPlayerConnectionSubject = new Subject<{ playerId: string }>()

    constructor(socket: Socket) {
        this.connectionId = socket.id
        this.connectionTime = new Date()
        this.socket = socket

        this.listenEvents();
    }

    join(roomName: string): void {
        this.socket.join(roomName)
    }

    listenEvents() {
        this.socket.on(GameEvents.PLAYER_CONNECTED.name, (data: PlayerConnectedEvent) => {
            try {
                const { playerId } = data
                this.onPlayerConnectionSubject.next({ playerId: playerId.toString() })
            } catch (error) {
                Log(this,`[Socket Client Connection] :: Error: ${error}`)
            }
        })
    }

    public sendInitialStateEvent(players: PlayerStateDto[]) {
        this.socket.emit(GameEvents.INITIAL_GAME_STATE.name, 
            GameEvents.INITIAL_GAME_STATE.getEvent(players))
    }

    onPlayerConnection = () => this.onPlayerConnectionSubject
    
}