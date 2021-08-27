import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { Delegator } from "../delegator";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";

enum AnimationState {
  IDLE = "idle",
  RUNNING = "running",
  IDLE_JUMP = "idleJump",
  RUNNING_JUMP = "runningJump",
  SECOND_JUMP = "secondJump",
}

export class PlayerAnimationDelegator implements Delegator {
  private savedState: PlayerState | undefined;
  private readonly statesRepository: PlayerStateRepository;
  private readonly player: Player;

  constructor(player: Player, statesRepository: PlayerStateRepository) {
    this.statesRepository = statesRepository;
    this.player = player;
  }

  init(): void {
    this.setupAnimations();
  }
  stop(): void {}
  update(time: number, delta: number): void {
    const state = this.statesRepository.getPlayerState(this.player.info.id);
    if (state != this.savedState && state) {
      const absVelx = Math.abs(state.velocity.x);
      const absVely = Math.abs(state.velocity.y);
      if (state.grounded) {
        if (absVelx > 1 && absVely < 2) this.playAnim(AnimationState.RUNNING);
        else if (absVelx < 1 && absVely >= 2)
          this.playAnim(AnimationState.IDLE_JUMP);
        else if (absVelx > 1 && absVely >= 2)
          this.playAnim(AnimationState.RUNNING_JUMP);
        else this.playAnim(AnimationState.IDLE);
      } else {
          if(absVely >= 2) this.playAnim(AnimationState.RUNNING_JUMP);
      }

      this.savedState = state;
    }
  }

  private setupAnimations() {
    const player = this.player.view;
    player.setTexture("player_anim");
    this.createAnim(0, 2, AnimationState.IDLE, true, 1000);
    this.createAnim(8, 13, AnimationState.RUNNING, true, 800);
    this.createAnim(15, 23, AnimationState.IDLE_JUMP, false, 500);
    this.createAnim(15, 23, AnimationState.RUNNING_JUMP, false, 500);
  }

  private getAnimationForPlayer(anim: string) {
    return `${this.player.info.id}-${anim}`;
  }

  private playAnim(anim: AnimationState) {
    const key = this.getAnimationForPlayer(anim);
    if (this.player.view.anims.currentAnim?.key == key) return;
    this.player.view.play(key);
  }

  private createAnim(
    startFrame: number,
    endFrame: number,
    key: string,
    loop = true,
    duration = 1
  ) {
    this.player.view.scene.anims.create({
      key: this.getAnimationForPlayer(key),
      frames: this.player.view.scene.anims.generateFrameNumbers("player_anim", {
        start: startFrame,
        end: endFrame,
      }),
      duration,
      repeat: loop ? -1 : 0,
    });
  }
}
