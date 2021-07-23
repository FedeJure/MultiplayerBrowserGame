import { Observable, Subject } from "rxjs";
import { Socket } from "socket.io-client";
import { ClientConnection } from "../domain/clientConnection";
import {GameEvents, PlayerConnectedEvent} from "./events/gameEvents"
import { Player } from "../domain/player";

export class SocketClientConnection implements ClientConnection {

    public readonly socket: Socket;
    public readonly connectionId: string;
    public readonly connectionTime: Date;

    private onPlayerConnectionSubject = new Subject<{ playerId: string; }>()

    constructor(socket: Socket) {
        this.connectionId = socket.id
        this.connectionTime = new Date()
        this.socket = socket

        this.listenEvents();
    }
    listenEvents() {
        this.socket.on(GameEvents.PLAYER_CONNECTED.name, (data: PlayerConnectedEvent) => {
            try {
                const { playerId } = data
                this.onPlayerConnectionSubject.next({ playerId: playerId.toString() })
            } catch (error) {
                console.log(`[Socket Client Connection] :: Error: ${error}`)
            }
        })
    }

    onPlayerConnection = () => this.onPlayerConnectionSubject
    
}