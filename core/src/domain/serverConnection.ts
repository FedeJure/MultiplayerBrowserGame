import { Observable } from "rxjs";
import { InitialGameStateEvent, NewPlayerConnectedEvent, PlayerDisconnectedEvent, PlayersStatesEvent } from "../infrastructure/events/gameEvents";
export interface ServerConnection {
    onNewPlayerConnected: Observable<NewPlayerConnectedEvent>
    onPlayersPositions: Observable<PlayersStatesEvent>
    onInitialGameState: Observable<InitialGameStateEvent>
    onPlayerDisconnected: Observable<PlayerDisconnectedEvent>
    onPing: Observable<number>
    emitStartNewConnection(playerId: string): void 
}