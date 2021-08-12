import { Observable } from "rxjs";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";
import { PlayerStateDto } from "../infrastructure/dtos/playerStateDto";
import { PlayerState } from "./player/playerState";

export interface ClientConnection {
  connectionId: string;
  connectionTime: Date;
  onPlayerConnection(): Observable<{ playerId: string }>;
  sendInitialStateEvent(players: PlayerStateDto[]): void;
  join(roomName: string): void;
  onInput(): Observable<{ playerId: string; input: PlayerInputDto }>;
}
