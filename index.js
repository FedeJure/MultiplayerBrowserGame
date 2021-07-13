require('@geckos.io/phaser-on-nodejs')
const { GameScene } = require("./core/lib/scenes/GameScene")
const { InitGame } = require("./core/lib/index")
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server)

app.use(express.static(__dirname + '/client/build'));

app.get('/', function (_, res) {
  res.sendFile(__dirname + '/index.html');
});

function setupAuthoritativePhaser() {
    const scene = new GameScene()
    InitGame(scene, io)
}

setupAuthoritativePhaser();
server.listen(8080, () => {
  console.log("[Server] :: Successfully started")
})