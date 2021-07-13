"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var Connection = /** @class */ (function () {
    function Connection(id) {
        this.id = id;
    }
    Connection.prototype.Disconnect = function () {
        console.log("Connection number: " + this.id + " disconnected");
    };
    return Connection;
}());
exports.Connection = Connection;
