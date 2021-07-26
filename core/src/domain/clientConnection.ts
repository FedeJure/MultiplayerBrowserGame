import { Observable } from "rxjs"
import { Socket } from "socket.io-client"
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO"
import { PlayerInfo } from "./playerInfo"

export interface ClientConnection {
    socket: Socket
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection(): Observable<{ playerId: string }>
    sendInitialStateEvent(players: PlayerStateDto[]): void
}