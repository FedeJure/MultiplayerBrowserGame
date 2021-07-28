require('@geckos.io/phaser-on-nodejs')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const { SetupServer } = require("./server/index");

app.use(express.static(__dirname + '/client/build'));
app.use('/assets',express.static(__dirname + '/core/src/assets'));
app.use(bodyParser.json({ extended: true }));

app.get('/', function (_, res) {
  //Serve client root file
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', function (req, res) {
  try {
    console.log(req.body)
    const {username, password} = req.body
    console.log(`[Login] :: Trying logging with username: ${username}, password: ${password}`)
    if (username == "test1") res.status(200).send({playerId: "1", message: "Logged success!", ok: true})
    if (username == "test2") res.status(200).send({playerId: "2", message: "Logged success!", ok: true})
  } catch (error) {
    console.log(error)
    res.status(400).send({ok: false, message: "Logging failed"})
  }
});

SetupServer(server)
server.listen(8080, () => {
  console.log("[Server] :: Successfully started")
})