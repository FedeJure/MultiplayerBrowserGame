/// <reference types="node" />
import { Server } from "http";
import { Observable } from "rxjs";
import { Connection } from "../domain/connection";
export declare class SocketServer {
    private connection;
    private onConnection;
    constructor(server: Server);
    OnConnection(): Observable<Connection>;
}
