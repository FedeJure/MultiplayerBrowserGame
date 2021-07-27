import { PlayerState } from "../../domain/playerState";

export interface PlayerStateRepository {
    getPlayerState(id: string) :PlayerState | undefined
    setPlayerState(id:string, state: PlayerState) : void
}