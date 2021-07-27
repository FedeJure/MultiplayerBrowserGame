import { Observable, Subject } from "rxjs";
import { Socket } from "socket.io-client";
import { ServerConnection } from "../domain/serverConnection";
import { GameEvents, InitialGameStateEvent, NewPlayerConnectedEvent, PlayersPositionsEvent } from "./events/gameEvents";

export class SocketServerConnection implements ServerConnection {

    readonly socket: Socket

    private readonly _onInitialGameState = new Subject<InitialGameStateEvent>()
    private readonly _onNewPlayerConnected = new Subject<NewPlayerConnectedEvent>()
    private readonly _onPlayersPositions = new Subject<PlayersPositionsEvent>()

    constructor(socket: Socket) {
        this.socket = socket

        socket.on(GameEvents.INITIAL_GAME_STATE.name, (data: InitialGameStateEvent) => this._onInitialGameState.next(data))
        socket.on(GameEvents.NEW_PLAYER_CONNECTED.name, (data: NewPlayerConnectedEvent) => this._onNewPlayerConnected.next(data))
        socket.on(GameEvents.PLAYERS_POSITIONS.name, (data: PlayersPositionsEvent) => this._onPlayersPositions.next(data))
        
    }
    get onInitialGameState(): Observable<InitialGameStateEvent> {
        return this._onInitialGameState
    }
    
    get onNewPlayerConnected(): Observable<NewPlayerConnectedEvent> {
        return this._onNewPlayerConnected
    }

    get onPlayersPositions(): Observable<PlayersPositionsEvent> {
        return this._onPlayersPositions      
    }

    emitStartNewConnection(playerId: string): void {
        this.socket.emit(GameEvents.PLAYER_CONNECTED.name, GameEvents.PLAYER_CONNECTED.getEvent("1")); 
    }
}