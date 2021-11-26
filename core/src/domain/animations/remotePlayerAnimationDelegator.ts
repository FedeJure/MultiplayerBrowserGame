import { PlayerAnimationDelegator } from "./playerAnimationDelegator";

export class RemotePlayerAnimationDelegator extends PlayerAnimationDelegator {

  update(time: number, delta: number) {
    const state = this.statesRepository.getPlayerState(this.player.info.id);
    if (state) this.playAnim(state.anim);
  }
}
