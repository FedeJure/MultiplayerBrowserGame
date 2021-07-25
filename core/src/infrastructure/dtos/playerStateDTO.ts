export interface PlayerStateDto {
    id: number,
    position: { x: number, y: number},
    velocity: { x: number, y: number},
    name: string
    life: number
}