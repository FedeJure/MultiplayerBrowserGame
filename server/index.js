const SetupSocketIo = require('socket.io')
const { InitGame } = require("@fedejure/multiplayer-game-core/lib/index")

exports.SetupServer = (server, staticAddress) => {
    const io = SetupSocketIo(server, { pingInterval: 5000 })
    InitGame(io, '../../../../server')
}