
export interface PlayerState {
    readonly life: number
    readonly jumpsAvailable: number
    readonly inInertia: boolean
    readonly canMove: boolean
    readonly position: {x: number, y: number}
    readonly velocity: { x: number, y: number }


    // constructor(
    //     savedX: number,
    //     savedY: number,
    //     life: number, 
    //     jumpsAvailable: number) {
    //     this.life = life
    //     this.jumpsAvailable = jumpsAvailable
    //     this.inInertia = false
    //     this.canMove = true
    //     this.position = {x: savedX, y: savedY}
    // }
}