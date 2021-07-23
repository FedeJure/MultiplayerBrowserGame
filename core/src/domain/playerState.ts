import { Position } from "./position"

export class PlayerState {
    public readonly life: number
    public readonly jumpsAvailable: number
    public readonly inInertia: boolean
    public readonly canMove: boolean
    public readonly position: Position


    constructor(
        x: number,
        y:number,
        life: number, 
        jumpsAvailable: number) {
        this.life = life
        this.jumpsAvailable = jumpsAvailable
        this.inInertia = false
        this.canMove = true,
        this.position = new Position(x, y)

    }
}