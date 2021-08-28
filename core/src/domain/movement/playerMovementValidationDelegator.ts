import { Math } from "phaser";
import { PlayerInputRequestRepository } from "../../infrastructure/repositories/playerInputRequestRepository";
import { PlayerStateRepository } from "../../infrastructure/repositories/playerStateRepository";
import { Delegator } from "../delegator";
import { Disposer } from "../disposer";
import { Player } from "../player/player";
import { PlayerState } from "../player/playerState";
import { ServerConnection } from "../serverConnection";

export class PlayerMovementValidationDelegator implements Delegator {
  private readonly player: Player;
  private readonly connection: ServerConnection;
  private readonly disposer: Disposer = new Disposer();
  private readonly stateRepository: PlayerStateRepository;
  private readonly inputRepository: PlayerInputRequestRepository;
  private lastInputValidated: number = 0;
  constructor(
    player: Player,
    connection: ServerConnection,
    stateRepository: PlayerStateRepository,
    inputRepository: PlayerInputRequestRepository
  ) {
    this.player = player;
    this.connection = connection;
    this.stateRepository = stateRepository;
    this.inputRepository = inputRepository;
  }
  update(time: number, delta: number): void {}

  init() {
    this.disposer.add(
      this.connection.onPlayersStates.subscribe((event) => {
        const state = event.states[this.player.info.id];
        if (
          state &&
          this.inputRepository.getOrCreate(this.player.info.id) ==
            state.inputNumber &&
          state.inputNumber > this.lastInputValidated 
        ) {
          this.lastInputValidated = state.inputNumber;
          const localState = this.stateRepository.getPlayerState(
            this.player.info.id
          );
          if (localState) this.validatePosition(localState, state);
        }
      })
    );
  }

  private validatePosition(state: PlayerState, remoteState: PlayerState) {
    const distance = Math.Distance.BetweenPoints(
      remoteState.position,
      state.position
    );
    this.player.view.scene.tweens.add({
      targets: this.player.view,
      x: remoteState.position.x,
      y: remoteState.position.y,
      duration: distance,
    });
    // if (Math.abs(remoteState.velocity.x - state.velocity.x) > velLimit) {
    //   this.player.view.setVelocity(remoteState.velocity.x, state.velocity.y);
    // }
    // if (Math.abs(remoteState.velocity.y - state.velocity.y) > velLimit) {
    //   this.player.view.setVelocity(state.velocity.x, remoteState.velocity.y);
    // }
    // if (Math.abs(remoteState.position.x - state.position.x) > posLimit) {
    //   this.player.view.setPosition(remoteState.position.x, state.position.y);
    // }
    // if (Math.abs(remoteState.position.y - state.position.y) > posLimit) {
    //   this.player.view.setPosition(state.position.x, remoteState.position.y);
    // }
  }

  stop() {}
}
