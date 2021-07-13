import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import {Observable} from "rxjs";
import { Connection } from "../domain/connection";


export class SocketServer {

    private connection: any;

    private onConnection : Observable<Connection>

    constructor(server: Server) {
        this.connection = new SocketIOServer(server)

        this.onConnection = new Observable<Connection>(obs => {
            this.connection.on("connection", (socket: Socket) => {
                var newConnection = new Connection(1)
                socket.on("disconnect", () => {
                    newConnection.Disconnect()
                })

                obs.next(newConnection)
            }) 
        })
    
    }

    OnConnection() : Observable<Connection>{
        return this.onConnection
    }

}