import { Observable } from "rxjs";
import { Socket } from "socket.io-client";
import { InitialGameStateEvent, NewPlayerConnectedEvent, PlayerDisconnectedEvent, PlayersPositionsEvent } from "../infrastructure/events/gameEvents";
import { PlayerFacade } from "./playerFacade";

export interface ServerConnection {
    onNewPlayerConnected: Observable<NewPlayerConnectedEvent>
    onPlayersPositions: Observable<PlayersPositionsEvent>
    onInitialGameState: Observable<InitialGameStateEvent>
    onPlayerDisconnected: Observable<PlayerDisconnectedEvent>
    emitStartNewConnection(playerId: string): void 
}