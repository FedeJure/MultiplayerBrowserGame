import {Observable} from "rxjs"
import { Player } from "./player"

export interface ClientConnection {
    connectionId: string,
    connectionTime: Date,
    onPlayerConnection: () => Observable<{playerId: string}>
}