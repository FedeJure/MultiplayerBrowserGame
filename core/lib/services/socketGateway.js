"use strict";
// import { Server } from "http";
// import { listen } from "socket.io";
// import {Observable} from "rxjs";
// import { Connection } from "../domain/connection";
// export class SocketGateway {
//     private connection: any;
//     private onConnection : Observable<Connection>
//     InitConnection(server: Server) {
//         this.connection = listen(server)
//         this.onConnection = new Observable<Connection>(obs => {
//             this.connection.on("connection", socketConnection => {
//                 var newConnection = new Connection(1)
//                 socketConnection.on("disconnect", () => {
//                     newConnection.Disconnect()
//                 })
//                 obs.next(newConnection)
//             }) 
//         })
//     }
//     OnConnection() : Observable<Connection>{
//         return this.onConnection
//     }
// }
