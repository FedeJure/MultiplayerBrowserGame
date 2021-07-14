"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionsRepository = void 0;
var ConnectionsRepository = /** @class */ (function () {
    function ConnectionsRepository() {
        this.connections = new Array();
    }
    ConnectionsRepository.prototype.addConnection = function (connection) {
        this.connections.push(connection);
    };
    ConnectionsRepository.prototype.removeConnection = function (id) {
        this.connections = this.connections.filter(function (c) { return c.connectionId != id; });
    };
    ConnectionsRepository.prototype.getAllConnections = function () {
        return this.connections;
    };
    return ConnectionsRepository;
}());
exports.ConnectionsRepository = ConnectionsRepository;
