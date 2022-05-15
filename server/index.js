const {
  InitGame,
  InitGameStateSender,
  InitServerDependencies,
} = require("@fedejure/multiplayer-game-core/lib/serverIndex");

exports.SetupServer = (socket, r) => {
  const provider = InitServerDependencies();
  InitGame(socket, "../../../../server", provider);
};

exports.SetupServerStateManager = (socket) => {
  InitGameStateSender(socket, provider);
};
