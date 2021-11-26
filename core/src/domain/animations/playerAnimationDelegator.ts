import { AnimationCode } from "./animations";
import { ServerPlayerAnimationDelegator } from "./serverPlayerAnimationDelegator";

export class PlayerAnimationDelegator extends ServerPlayerAnimationDelegator {
  init(): void {
    this.setupAnimations();
  }
  stop(): void {}
  update(time: number, delta: number): void {
    const state = this.statesRepository.getPlayerState(this.player.info.id);
    if (state) {
      const currentAnim = this.getAnimation(state);
      this.playAnim(currentAnim);
    }
  }

  protected setupAnimations() {
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

  protected playAnim(anim: AnimationCode) {
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
