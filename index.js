require("@geckos.io/phaser-on-nodejs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const { SetupServer } = require("./server/index");
const client = require("prom-client");
const register = new client.Registry();
const PORT = process.env.PORT || 8081;
const SetupSocketIo = require("socket.io");
const io = SetupSocketIo(server, { pingInterval: 5000 });
register.setDefaultLabels({
  app: "multiplayer-game",
});

SetupServer(io);

client.collectDefaultMetrics({ register });

app.use(express.static(__dirname + "/app/build"));
app.use("/assets", express.static(__dirname + "/server/assets"));
app.use(bodyParser.json({ extended: true }));

// app.get('*', function (_, res) {
//   //Serve client root file
//   res.sendFile(__dirname + '/app/build');
// });

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.end(await register.metrics());
});

let mockNextId = 1;

app.post("/login", function (req, res) {
  try {
    const { username, password } = req.body;
    console.log(
      `[Login] :: Trying logging with username: ${username}, password: ${password}`
    );
    res.status(200).send({
      playerId: mockNextId.toString(),
      message: "Logged success!",
      ok: true,
    });
    mockNextId++;
  } catch (error) {
    console.log(error);
    res.status(400).send({ ok: false, message: "Logging failed" });
  }
});

server.listen(PORT, () => {
  console.log("[Server] :: Successfully started");
});
