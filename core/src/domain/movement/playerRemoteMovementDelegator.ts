import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { Player } from "../player/player";
import { ServerConnection } from "../serverConnection"

export class PlayerRemoteMovementDelegator implements Delegator {
    private readonly player: Player
    private readonly connection: ServerConnection

    private readonly disposer: Disposer = new Disposer()
    constructor(
        player: Player,
        connection: ServerConnection) {
        this.player = player
        this.connection = connection

    }
    init(): void {
        this.disposer.add(this.connection.onPlayersStates.subscribe(event => {
            const state = event.states[this.player.info.id]
            if (state) {
                const view = this.player.view
                view.setPosition(state.position.x, state.position.y)
                view.setVelocity(state.velocity.x, state.velocity.y)
            }
        }))
    }
    stop(): void {
        this.disposer.dispose()
    }
    update(time: number, delta: number): void {
    }

}