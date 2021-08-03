import { ClientProvider } from "../clientProvider";
import { resolvePlaterMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { PlayerInput } from "../domain/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {
    private input: PlayerInput
    private connection: ServerConnection

    private lastInputSended: string = ""
    private currentInput: PlayerInputDto | undefined

    constructor(player: PlayerView, input: PlayerInput, connection: ServerConnection) {
        super(player)
        this.input = input
        this.connection = connection
        this.renderLocalPlayer()
        player.onUpdate.subscribe(this.update.bind(this))
        player.onPreUpdate.subscribe(this.preUpdate.bind(this))
    }

    renderLocalPlayer(): void {
        this.view.scene.cameras.main.startFollow(this.view)
    }

    preUpdate({ time, delta }: { time: number, delta: number }) {
    }

    update({ time, delta }: { time: number, delta: number }) {
        this.currentInput = this.input.toDto()
        if (this.inputHasChange()) {
            this.connection.emitInput(ClientProvider.localPlayerId, this.currentInput)
            const newVelocity = resolvePlaterMovementWithInputs(this.input, this.view, delta)
            this.view.setVelocity(newVelocity.x, newVelocity.y)
            this.lastInputSended = JSON.stringify(this.currentInput)
        }
    }

    inputHasChange() {
        return !this.lastInputSended || JSON.stringify(this.currentInput) != this.lastInputSended
    }
}