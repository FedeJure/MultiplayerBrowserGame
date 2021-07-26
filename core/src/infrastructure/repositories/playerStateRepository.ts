import { PlayerState } from "../../domain/playerState";

export interface PlayerStateRepository {
    getPlayerState(id: number) :PlayerState | undefined
    setPlayerState(id:number, state: PlayerState) : void
}