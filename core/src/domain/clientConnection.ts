import { Observable } from "rxjs"
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO"

export interface ClientConnection {
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection(): Observable<{ playerId: string }>
    sendInitialStateEvent(players: PlayerStateDto[]): void
    join(roomName: string): void
}