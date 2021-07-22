import { Observable } from "rxjs";
export interface ClientConnection {
    connectionId: string;
    connectionTime: Date;
    onPlayerConnection: () => Observable<{
        playerId: string;
    }>;
}
