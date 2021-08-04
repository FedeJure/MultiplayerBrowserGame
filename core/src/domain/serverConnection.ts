import { Observable } from "rxjs";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { InitialGameStateEvent, NewPlayerConnectedEvent, PlayerDisconnectedEvent, PlayersStatesEvent } from "../infrastructure/events/gameEvents";
export interface ServerConnection {
    onNewPlayerConnected: Observable<NewPlayerConnectedEvent>
    onPlayersPositions: Observable<PlayersStatesEvent>
    onInitialGameState: Observable<InitialGameStateEvent>
    onPlayerDisconnected: Observable<PlayerDisconnectedEvent>
    onPing: Observable<number>
    emitStartNewConnection(playerId: string): void 
    emitInput(playerId: string, input: PlayerInputDto): void
}