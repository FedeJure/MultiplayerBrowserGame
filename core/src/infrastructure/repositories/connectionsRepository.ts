import { ClientConnection } from "../../domain/clientConnection"

export class ConnectionsRepository {

    private connections = new Array<ClientConnection>();

    addConnection(connection: ClientConnection) {
        this.connections.push(connection)
    }

    removeConnection(id: string) {
        this.connections = this.connections.filter(c => c.connectionId != id)
    }

    getAllConnections() : Array<ClientConnection> {
        return this.connections
    }
}