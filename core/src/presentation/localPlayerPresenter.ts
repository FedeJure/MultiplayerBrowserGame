import { ClientProvider } from "../clientProvider";
import { resolvePlaterMovementWithInputs } from "../domain/actions/resolvePlayerMovementWithInput";
import { Player } from "../domain/player/player";
import { PlayerInput } from "../domain/player/playerInput";
import { ServerConnection } from "../domain/serverConnection";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PhaserPlayerView } from "../view/playerView";
import { ClientPlayerPresenter } from "./clientPlayerPresenter";


export class LocalPlayerPresenter extends ClientPlayerPresenter {
    private input: PlayerInput
    private connection: ServerConnection
    private player: Player | undefined
    private lastInputSended: string = ""
    private currentInput: PlayerInputDto | undefined

    constructor(view: PhaserPlayerView, input: PlayerInput, connection: ServerConnection) {
        super(view)
        this.input = input
        this.connection = connection
        this.renderLocalPlayer()
        console.log(ClientProvider.connectedPlayers)
        this.player = ClientProvider.connectedPlayers.getPlayer(ClientProvider.localPlayerId)
        
        view.onUpdate.subscribe(this.update.bind(this))
        view.onPreUpdate.subscribe(this.preUpdate.bind(this))
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