export interface PlayerStateDto {
    id: string,
    velocity: { x: number, y: number },
    position: { x: number, y: number }
    name: string
    life: number,
    jumpsAvailable: number,
    inInertia: boolean,
    canMove: boolean
}