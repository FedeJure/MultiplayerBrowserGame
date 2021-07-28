import { Observable, Subject } from "rxjs";
import { Socket } from "socket.io-client";
import { ServerConnection } from "../domain/serverConnection";
import { GameEvents, InitialGameStateEvent, NewPlayerConnectedEvent, PlayerDisconnectedEvent, PlayersPositionsEvent } from "./events/gameEvents";

export class SocketServerConnection implements ServerConnection {

    readonly socket: Socket

    private readonly _onInitialGameState = new Subject<InitialGameStateEvent>()
    private readonly _onNewPlayerConnected = new Subject<NewPlayerConnectedEvent>()
    private readonly _onPlayersPositions = new Subject<PlayersPositionsEvent>()
    private readonly _onPlayerDisconnected = new Subject<PlayerDisconnectedEvent>();

    constructor(socket: Socket) {
        this.socket = socket

        socket.on(GameEvents.INITIAL_GAME_STATE.name, (data: InitialGameStateEvent) => this._onInitialGameState.next(data))
        socket.on(GameEvents.NEW_PLAYER_CONNECTED.name, (data: NewPlayerConnectedEvent) => this._onNewPlayerConnected.next(data))
        socket.on(GameEvents.PLAYERS_POSITIONS.name, (data: PlayersPositionsEvent) => this._onPlayersPositions.next(data))
        socket.on(GameEvents.PLAYER_DISCONNECTED.name, (data: PlayerDisconnectedEvent) => this._onPlayerDisconnected.next(data))
        
    }
    get onInitialGameState() {
        return this._onInitialGameState
    }
    
    get onNewPlayerConnected() {
        return this._onNewPlayerConnected
    }

    get onPlayersPositions() {
        return this._onPlayersPositions      
    }

    get onPlayerDisconnected() {
        return this._onPlayerDisconnected
    }

    emitStartNewConnection(playerId: string): void {
        this.socket.emit(GameEvents.PLAYER_CONNECTED.name, GameEvents.PLAYER_CONNECTED.getEvent(playerId)); 
    }
}