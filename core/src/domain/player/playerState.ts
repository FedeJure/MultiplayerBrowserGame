export interface PlayerState {
  readonly life: number;
  readonly jumpsAvailable: number;
  readonly inInertia: boolean;
  readonly canMove: boolean;
  readonly position: { x: number; y: number };
  readonly velocity: { x: number; y: number };
  readonly canJump: boolean
}
