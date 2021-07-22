import { Observable, Subject } from "rxjs";
import { Socket } from "socket.io-client";
import { ClientConnection } from "../domain/clientConnection";
import {GameEvents} from "./events/gameEvents"
import { Player } from "../domain/player";

export class SocketClientConnection implements ClientConnection {

    private socket: Socket;
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
        this.socket.on(GameEvents.PLAYER_CONNECTED, (data: any) => {
            try {
                const { playerId } : { playerId: string } = data
                this.onPlayerConnectionSubject.next({ playerId })
            } catch (error) {
                console.log(`[Socket Client Connection] :: Error: ${error}`)
            }
        })
    }

    onPlayerConnection = () => this.onPlayerConnectionSubject
    
}