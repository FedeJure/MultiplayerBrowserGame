import { Observable } from "rxjs"
import { Socket } from "socket.io-client"
import { PlayerPositionsDTO } from "../infrastructure/dtos/playerPositionsDTO"
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDTO"

export interface ClientConnection {
    sendNewPlayerConnected(state: PlayerStateDto): void
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection(): Observable<{ playerId: string }>
    sendInitialStateEvent(players: PlayerStateDto[]): void
    sendPlayerPositions(positions: PlayerPositionsDTO[]): void
    join(roomName: string): void
}