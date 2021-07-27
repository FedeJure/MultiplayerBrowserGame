import { PlayerInfo } from '../../domain/playerInfo'

export interface PlayerInfoRepository {
    getPlayer: (id: string) => PlayerInfo | undefined
    addPlayer: (id: string, info: PlayerInfo) => void
}