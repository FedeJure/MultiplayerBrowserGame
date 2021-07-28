import { Observable } from "rxjs"
import { Socket } from "socket.io-client"
import { PlayerPositionsDTO } from "../infrastructure/dtos/playerPositionsDTO"
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO"

export interface ClientConnection {
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection(): Observable<{ playerId: string }>
    sendInitialStateEvent(players: PlayerStateDto[]): void
    join(roomName: string): void
}