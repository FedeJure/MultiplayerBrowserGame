import { ClientConnection } from "../../domain/clientConnection";
export declare class ConnectionsRepository {
    private connections;
    addConnection(connection: ClientConnection): void;
    removeConnection(id: string): void;
    getAllConnections(): Array<ClientConnection>;
}
