import { PlayerInfo } from '../../domain/playerInfo';
export interface PlayerInfoRepository {
    getPlayer: (id: number) => PlayerInfo | undefined;
}
