import { Socket } from "socket.io";
import { Socket as ClientSocket } from "socket.io-client";
import { CoreProvider } from "../coreProvider";
export declare class ClientGame {
    readonly socket: Socket | ClientSocket;
    readonly provider: CoreProvider;
    constructor(coreProvider: CoreProvider, socket: Socket | ClientSocket);
}
