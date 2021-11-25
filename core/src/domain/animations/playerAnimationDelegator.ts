import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { Delegator } from "../delegator";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { AnimationCode } from "./animations";

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

    if (state) {
      let animToPlay: AnimationCode | null = null;
      const absVelx = Math.abs(state.velocity.x);
      const absVely = Math.abs(state.velocity.y);
      const velY = state.velocity.y;

      animToPlay = this.getAnimation(state, velY, absVelx, absVely);

      // if (state.grounded) {
      //   if (absVelx > 1) {
      //     if (absVely < 2) animToPlay = AnimationCode.RUNNING;
      //     else animToPlay = AnimationCode.RUNNING_JUMP;
      //   } else if (absVelx < 1 && absVely >= 2)
      //     animToPlay = AnimationCode.IDLE_JUMP;
      //   else animToPlay = AnimationCode.IDLE;
      // } else {
      //   if (velY > 2) animToPlay = AnimationCode.FALLING;
      // }
      console.log(animToPlay);
      if (animToPlay && state.anim != animToPlay) {
        this.statesRepository.setPlayerState(this.player.info.id, {
          ...state,
          anim: animToPlay,
        });
        this.playAnim(animToPlay);
      }
    }
  }

  private getAnimation(
    state: PlayerState,
    velY: number,
    absVelx: number,
    absVely: number
  ) {
    if (!state.grounded && velY > 2) return AnimationCode.FALLING;

    if (state.grounded && absVelx > 1 && absVely < 2)
      return AnimationCode.RUNNING;

    if (absVelx < 1 && absVely >= 2) return AnimationCode.IDLE_JUMP;

    if (absVelx > 1 && absVely >= 2) return AnimationCode.RUNNING_JUMP;

    if (state.grounded && absVely < 1 && absVelx < 1) return AnimationCode.IDLE;
    return state.anim;
  }

  private setupAnimations() {
    const player = this.player.view;
    player.setTexture("player_anim");
    this.createAnim(0, 2, AnimationCode.IDLE, true, 1000);
    this.createAnim(8, 13, AnimationCode.RUNNING, true, 800);
    this.createAnim(15, 23, AnimationCode.IDLE_JUMP, false, 500);
    this.createAnim(15, 23, AnimationCode.RUNNING_JUMP, false, 500);
    this.createAnim(22, 23, AnimationCode.FALLING, true, 200);
  }

  private getAnimationForPlayer(anim: string) {
    return `${this.player.info.id}-${anim}`;
  }

  private playAnim(anim: AnimationCode) {
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
