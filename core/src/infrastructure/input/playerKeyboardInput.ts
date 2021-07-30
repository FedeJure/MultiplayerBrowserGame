import {Input} from "phaser";
import { PlayerInput } from "../../domain/playerInput";

export class PlayerKeyBoardInput implements PlayerInput {
    input: PlayerInput

    constructor(phaserInput: Input.InputPlugin) {
        phaserInput.keyboard.addKeys({
            up: Input.Keyboard.KeyCodes.W,
            down: Input.Keyboard.KeyCodes.S,
            left: Input.Keyboard.KeyCodes.A,
            right: Input.Keyboard.KeyCodes.D,
            jump: Input.Keyboard.KeyCodes.SPACE,
        })
        this.input = phaserInput as unknown as PlayerInput
    }

    get up() { return this.input.up };
    get down() { return this.input.down };
    get left() { return this.input.left };
    get right() { return this.input.right };
    get jump() { return this.input.jump };
}