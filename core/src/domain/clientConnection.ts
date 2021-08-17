import { Observable } from "rxjs";
import { PlayerInitialStateDto } from "../infrastructure/dtos/playerInitialStateDto";
import { PlayerInputDto } from "../infrastructure/dtos/playerInputDto";

export interface ClientConnection {
  connectionId: string;
  connectionTime: Date;
  onPlayerConnection(): Observable<{ playerId: string }>;
  sendInitialStateEvent(players: PlayerInitialStateDto[]): void;
  join(roomName: string): void;
  onInput(): Observable<{ playerId: string; input: PlayerInputDto }>;
}
