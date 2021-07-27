export interface PlayerStateDto {
    id: string,
    position: { x: number, y: number},
    velocity: { x: number, y: number},
    name: string
    life: number
}