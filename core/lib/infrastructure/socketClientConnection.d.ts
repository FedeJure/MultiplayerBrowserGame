import { Subject } from "rxjs";
import { Socket } from "socket.io-client";
import { ClientConnection } from "../domain/clientConnection";
export declare class SocketClientConnection implements ClientConnection {
    private socket;
    readonly connectionId: string;
    readonly connectionTime: Date;
    private onPlayerConnectionSubject;
    constructor(socket: Socket);
    listenEvents(): void;
    onPlayerConnection: () => Subject<{
        playerId: string;
    }>;
}
