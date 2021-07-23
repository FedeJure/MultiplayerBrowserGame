import {Observable} from "rxjs"
import { Socket } from "socket.io-client"
import { Player } from "./player"

export interface ClientConnection {
    socket: Socket
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection: () => Observable<{playerId: string}>
}