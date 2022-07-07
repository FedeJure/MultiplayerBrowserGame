const {
  InitGame,
  InitGameStateSender,
} = require("@fedejure/multiplayer-game-core/lib/serverIndex");

exports.SetupServer = (socket) => {
  return InitGame(socket, "../../../../server");
};

exports.SetupServerStateManager = (socket) => {
  InitGameStateSender(socket, provider);
};