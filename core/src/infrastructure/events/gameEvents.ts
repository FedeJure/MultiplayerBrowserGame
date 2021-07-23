import { Position } from "../../domain/position";

export const GameEvents: {
    PLAYER_CONNECTED: { name: string, getEvent: (playerId: number) => PlayerConnectedEvent },
    PLAYERS_POSITIONS: { name: string, getEvent: (positions: { id: number, position: Position }[]) => PlayersPositionsEvent },
} = {
    PLAYER_CONNECTED: {
        name: "player_connected", getEvent: (playerId: number) => (
            { playerId, time: new Date() }
        )
    },
    PLAYERS_POSITIONS: {
        name: "players_positions", getEvent: (positions: { id: number, position: Position }[]) => (
            { positions, time: new Date() }
        )
    },
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