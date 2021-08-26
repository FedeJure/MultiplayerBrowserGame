import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { ValidateStateAction } from "../actions/validatePosition";
import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { Player } from "../player/player";
import { ServerConnection } from "../serverConnection";

export class PlayerMovementValidationDelegator implements Delegator {
    private readonly player: Player
    private readonly connection: ServerConnection
    private readonly disposer: Disposer = new Disposer()
    private readonly stateRepository: PlayerStateRepository
    private readonly validateState: ValidateStateAction
    constructor(player: Player,
        connection: ServerConnection,
        stateRepository: PlayerStateRepository,
        validateState: ValidateStateAction) {
        this.player = player
        this.connection = connection
        this.stateRepository = stateRepository
        this.validateState = validateState
    }
    update(time: number, delta: number): void {
        
    }

    init() {
        this.disposer.add(
            this.connection.onPlayersStates
              .subscribe(event => {
                const state = event.states[this.player.info.id];
                if (state) {
                    const localState = this.stateRepository.getPlayerState(this.player.info.id)
                    if (localState) this.validateState.execute(this.player, state)
                }
              })
          );
    }

    stop() {

    }

}