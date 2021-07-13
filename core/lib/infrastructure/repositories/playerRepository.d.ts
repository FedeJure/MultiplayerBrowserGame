import { Player } from '../../domain/player';
export interface PlayerRepository {
    getActivePlayers: () => Array<Player>;
}
