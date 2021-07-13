import { Game } from "./domain/game";
import { InMemoryPlayerRepository } from "./infrastructure/inMemoryPlayerRepository"
import { GameScene } from "./scenes/GameScene";

var game : Game

export const InitGame = (gameScene: GameScene) => {
    var inMemoryRepository = new InMemoryPlayerRepository(); // TODO: pasar por parametro
    game = new Game(gameScene, inMemoryRepository);
}


export const ConnectNewUser = (name: String) => {
    if (!game) throw new Error("No game running!");
    
}