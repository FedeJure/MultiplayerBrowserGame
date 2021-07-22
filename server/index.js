const SetupSocketIo = require('socket.io')
const { GameScene } = require("../core/lib/view/GameScene")
const { InitGame } = require("../core/lib/index")
const { ServerConfig } = require('../core/lib/view/DefaultGameConfigs')

exports.SetupServer = (server) => {
    const io = SetupSocketIo(server)
    InitGame(io)
}