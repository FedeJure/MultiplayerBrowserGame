const SetupSocketIo = require('socket.io')
const { GameScene } = require("../core/lib/scenes/GameScene")
const { InitGame } = require("../core/lib/index")

exports.SetupServer = (server) => {
    const io = SetupSocketIo(server)
    const scene = new GameScene()
    InitGame(scene, io)
}