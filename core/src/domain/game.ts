import { PlayerRepository } from "../infrastructure/playerRepository";
import { GameScene } from "../scenes/GameScene";
import { createPlayerWith, Player } from "./player";

export class Game {

    playerRepository: PlayerRepository
    gameScene: GameScene

    constructor(gameScene: GameScene,
        playerRepository: PlayerRepository) {
        this.playerRepository = playerRepository
        this.gameScene = gameScene
        
        // this.gameScene.events.on("create", () => {
        //     gameScene.addPlayers(playerRepository.getActivePlayers())
        // })

        // io.on("connection", socket => {
        //     this.addPlayer(socket.id, 0, 30, socket.handshake.query.name);
        //     socket.emit("connectionSuccess", players[socket.id].getRepresentation());
      
        //     chatController.addToChatRoom(socket);
      
        //     socket.on("disconnect", () => {
        //       this.removePlayer(socket.id);
        //       delete players[socket.id];
        //       io.emit("disconnect", socket.id);
        //     });
      
        //     socket.on("playerInput", ({ input, state }) => {
        //       if (players[socket.id]) {
        //         players[socket.id].input = input;
        //         players[socket.id].lastState = state;
        //       }
      
        //     });
      
        //     globalEventEmitter.addListener("playerDie", playerId => {
        //       //io.emit("playerDie", playerId);
        //       players[playerId].resetPlayer();
        //     });
        //   });
    }

    addPlayer(id: number, name: string) {
        this.gameScene.addPlayers([createPlayerWith(id, name)])
    }
}