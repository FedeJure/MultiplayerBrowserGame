import { Player } from "../../domain/player";
import { PlayerState } from "../../domain/playerState";
import { Position } from "../../domain/position";
import { PlayerStateDto } from "../dtos/playerStateDTO";

export const GameEvents: {
    PLAYER_CONNECTED: { name: string, getEvent: (playerId: number) => PlayerConnectedEvent },
    PLAYERS_POSITIONS: { name: string, getEvent: (positions: { id: number, position: Position }[]) => PlayersPositionsEvent },
    INITIAL_GAME_STATE: { name: string, getEvent: (players: PlayerStateDto[]) => InitialGameStateEvent}
} = {
    PLAYER_CONNECTED: {
        name: "player_connected", getEvent: (playerId) => ({ playerId, time: new Date()})
    },
    PLAYERS_POSITIONS: {
        name: "players_positions", getEvent: (positions) => ({ positions, time: new Date()})
    },
    INITIAL_GAME_STATE: {
        name: "initial_game_state", getEvent: (players) => ({players, time: new Date()})
    }
}

interface BaseEvent {
    time: Date
}

export interface PlayerConnectedEvent extends BaseEvent {
    playerId: number
}

export interface PlayersPositionsEvent extends BaseEvent {
    positions: { id: number, position: Position }[]
}

export interface InitialGameStateEvent extends BaseEvent {
    players: PlayerStateDto[]
}