"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClientConnection = void 0;
var rxjs_1 = require("rxjs");
var gameEvents_1 = require("./events/gameEvents");
var SocketClientConnection = /** @class */ (function () {
    function SocketClientConnection(socket) {
        var _this = this;
        this.onPlayerConnectionSubject = new rxjs_1.Subject();
        this.onPlayerConnection = function () { return _this.onPlayerConnectionSubject; };
        this.connectionId = socket.id;
        this.connectionTime = new Date();
        this.socket = socket;
        this.listenEvents();
    }
    SocketClientConnection.prototype.listenEvents = function () {
        var _this = this;
        this.socket.on(gameEvents_1.GameEvents.PLAYER_CONNECTED, function (data) {
            try {
                var playerId = data.playerId;
                _this.onPlayerConnectionSubject.next({ playerId: playerId });
            }
            catch (error) {
                console.log("[Socket Client Connection] :: Error: " + error);
            }
        });
    };
    return SocketClientConnection;
}());
exports.SocketClientConnection = SocketClientConnection;
