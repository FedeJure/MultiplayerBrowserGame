import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { Player } from "../player/player";
import { ServerConnection } from "../serverConnection";

export class PlayerMovementValidationDelegator implements Delegator {
    private readonly player: Player
    private readonly connection: ServerConnection
    private readonly disposer: Disposer = new Disposer()
    private readonly stateRepository: PlayerStateRepository
    constructor(player: Player,
        connection: ServerConnection,
        stateRepository: PlayerStateRepository) {
        this.player = player
        this.connection = connection
        this.stateRepository = stateRepository
    }

    init() {
        this.disposer.add(
            this.connection.onPlayersStates
              .subscribe(event => {
                const state = event.states[this.player.info.id];
                if (new Boolean(state)) {
                    const localState = this.stateRepository.getPlayerState(this.player.info.id)
                    if (localState) console.log(state.position.x - localState.position.x, state.position.y - localState.position.y)
                }
              })
          );
    }

    stop() {

    }

}