import { Socket } from "socket.io"
import { Socket as ClientSocket } from "socket.io-client"
import { GameEvents } from "../infrastructure/events/gameEvents"
import { GameScene } from "../view/GameScene"
import { ProvidePlayerData } from "../domain/actions/providePlayerData"
import { CoreProvider } from "../coreProvider";
import { GameConfig } from "../view/gameConfig";


export class ClientGame {

    readonly socket: Socket | ClientSocket
    readonly provider: CoreProvider

    constructor(
        coreProvider: CoreProvider,
        socket: Socket | ClientSocket) {
        this.provider = coreProvider
        this.socket = socket

    }
}