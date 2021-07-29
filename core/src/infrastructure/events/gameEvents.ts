import { PlayerStateDto } from "../dtos/playerStateDTO";

export const GameEvents: {
    PLAYER_CONNECTED: { name: string, getEvent: (playerId: string) => PlayerConnectedEvent },
    PLAYERS_POSITIONS: { name: string, getEvent: (positions: PlayerStateDto[]) => PlayersStatesEvent },
    INITIAL_GAME_STATE: { name: string, getEvent: (players: PlayerStateDto[]) => InitialGameStateEvent},
    NEW_PLAYER_CONNECTED: { name: string, getEvent: (player: PlayerStateDto) => NewPlayerConnectedEvent},
    PLAYER_DISCONNECTED: { name: string, getEvent: (playerId: string) => PlayerDisconnectedEvent}
} = {
    PLAYER_CONNECTED: {
        name: "player_connected", getEvent: (playerId) => ({ playerId, time: new Date()})
    },
    PLAYERS_POSITIONS: {
        name: "players_positions", getEvent: (positions) => ({ positions, time: new Date()})
    },
    INITIAL_GAME_STATE: {
        name: "initial_game_state", getEvent: (players) => ({players, time: new Date()})
    },
    NEW_PLAYER_CONNECTED: {
        name: "new_player_connected", getEvent: (player) => ({player, time: new Date()})
    },
    PLAYER_DISCONNECTED: {
        name: "player_disconnected", getEvent: (playerId) => ({playerId, time: new Date()})
    }
}

interface BaseEvent {
    time: Date
}

export interface PlayerConnectedEvent extends BaseEvent {
    playerId: string
}

export interface PlayersStatesEvent extends BaseEvent {
    positions: PlayerStateDto[]
}

export interface InitialGameStateEvent extends BaseEvent {
    players: PlayerStateDto[]
}

export interface NewPlayerConnectedEvent extends BaseEvent {
    player: PlayerStateDto
}

export interface PlayerDisconnectedEvent extends BaseEvent {
    playerId: string
}