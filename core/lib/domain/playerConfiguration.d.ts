import { Side } from "./side";
export interface PlayerConfiguration {
    initialLife: number;
    initialJumps: number;
    height: number;
    width: number;
    jumpVelocity: number;
    runVelocity: number;
    initialSide: Side;
}
