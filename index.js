require("@geckos.io/phaser-on-nodejs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const server = require("http").createServer(app);
const { SetupServer } = require("./server/index");
// const client = require("prom-client");
// const register = new client.Registry();
const PORT = process.env.PORT || 8081;
const SetupSocketIo = require("socket.io");

Init()

async function Init() {
  const io = SetupSocketIo(server, { pingInterval: 5000 });
  // register.setDefaultLabels({
  //   app: "multiplayer-game",
  // });
  global.phaserOnNodeFPS = 30
  const serverApi = await SetupServer(io);

  // client.collectDefaultMetrics({ register });
  app.use(cors())
  app.use(express.static(__dirname + "/app/build"));
  app.use("/AssetManagerProject/assets", express.static(__dirname + "/server/AssetManagerProject/assets"));
  app.use(bodyParser.json({ extended: true }));

  // app.get('*', function (_, res) {
  //   //Serve client root file
  //   res.sendFile(__dirname + '/app/build');
  // });

  app.get("/metrics", async (req, res) => {
    // res.setHeader("Content-Type", register.contentType);
    // res.end(await register.metrics());
  });

  app.post("/login", function (req, res) {
    try {
      const { email, password } = req.body;
      console.log(
        `[Login] :: Trying logging with email: ${email}, password: ${password}`
      );
      serverApi.loginUser(email, password)
        .then(({ message, success, playerId }) => {
          res.status(200).send({
            playerId,
            message: message,
            ok: success,
          });
        })

    } catch (error) {
      console.log(error);
      res.status(400).send({ ok: false, message: "Logging failed" });
    }
  });

  app.post("/signup",(req, res) => {
    try {
      const { email, password } = req.body;
      console.log(
        `[Login] :: Trying create account with email: ${email}, password: ${password}`
      );
      serverApi.createAccount(email, password)
        .then(({ message, success }) => {
          res.status(200).send({
            message: message,
            ok: success,
          });
        })

    } catch (error) {
      console.log(error);
      res.status(400).send({ ok: false, message: "Logging failed" });
    } 
  })

  server.listen(PORT, () => {
    console.log("[Server] :: Successfully started");
  });
} 
