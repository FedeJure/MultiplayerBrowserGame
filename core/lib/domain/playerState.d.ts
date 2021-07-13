export declare class PlayerState {
    readonly life: number;
    readonly jumpsAvailable: number;
    readonly inInertia: boolean;
    readonly canMove: boolean;
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number, life: number, jumpsAvailable: number);
}
