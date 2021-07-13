export class PlayerState {
    public readonly life: number
    public readonly jumpsAvailable: number
    public readonly inInertia: boolean
    public readonly canMove: boolean
    public readonly x: number
    public readonly y: number


    constructor(
        x: number,
        y:number,
        life: number, 
        jumpsAvailable: number) {
        this.life = life
        this.jumpsAvailable = jumpsAvailable
        this.inInertia = false
        this.canMove = true,
        this.x = x
        this.y = y

    }
}