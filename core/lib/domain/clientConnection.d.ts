import { Player } from "./player";
export interface ClientConnection {
    connectionId: string;
    connectionTime: Date;
    player?: Player;
}
