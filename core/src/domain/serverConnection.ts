import { Observable } from "rxjs";
import { Socket } from "socket.io-client";
import { InitialGameStateEvent, NewPlayerConnectedEvent, PlayersPositionsEvent } from "../infrastructure/events/gameEvents";
import { PlayerFacade } from "./playerFacade";

export interface ServerConnection {
    onNewPlayerConnected: Observable<NewPlayerConnectedEvent>
    onPlayersPositions: Observable<PlayersPositionsEvent>
    onInitialGameState: Observable<InitialGameStateEvent>
    emitStartNewConnection(playerId: string): void 
}