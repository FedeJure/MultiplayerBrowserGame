"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServer = void 0;
var socket_io_1 = require("socket.io");
var rxjs_1 = require("rxjs");
var connection_1 = require("../domain/connection");
var SocketServer = /** @class */ (function () {
    function SocketServer(server) {
        var _this = this;
        this.connection = new socket_io_1.Server(server);
        this.onConnection = new rxjs_1.Observable(function (obs) {
            _this.connection.on("connection", function (socket) {
                var newConnection = new connection_1.Connection(1);
                socket.on("disconnect", function () {
                    newConnection.Disconnect();
                });
                obs.next(newConnection);
            });
        });
    }
    SocketServer.prototype.OnConnection = function () {
        return this.onConnection;
    };
    return SocketServer;
}());
exports.SocketServer = SocketServer;
