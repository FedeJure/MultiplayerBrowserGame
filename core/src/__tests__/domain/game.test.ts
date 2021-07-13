import { Game } from "../../domain/game"
import { PlayerRepository } from "../../infrastructure/playerRepository";
import { GameScene } from "../../scenes/GameScene";

var playerRepository: PlayerRepository
var game : Game;
var gameScene : GameScene;


test("Game initted with provided player repository",() => {

})

beforeEach(() => {
    playerRepository = {
        getActivePlayers: () => {
            return []
        }
    }

    gameScene = new GameScene()
    game = new Game(gameScene, playerRepository)
})