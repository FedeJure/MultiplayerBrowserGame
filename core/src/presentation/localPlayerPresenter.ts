import { ClientProvider } from "../clientProvider";
import { resolvePlaterMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {
    private input: PlayerInput
    private connection: ServerConnection

    private lastInputSended: string = ""
    private currentInput: PlayerInputDto | undefined

    constructor(player: PhaserPlayerView, input: PlayerInput, connection: ServerConnection) {
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
        const currentInput = this.input.toDto()
        this.currentInput = currentInput
        if (this.inputHasChange()) {
            this.connection.emitInput(ClientProvider.localPlayerId, currentInput)
            const newVelocity = resolvePlaterMovementWithInputs(this.input, this.view, delta)
            this.view.setVelocity(newVelocity.x, newVelocity.y)
            this.lastInputSended = JSON.stringify(currentInput)
        }
    }

    inputHasChange() {
        return !this.lastInputSended || JSON.stringify(this.currentInput) != this.lastInputSended
    }
}