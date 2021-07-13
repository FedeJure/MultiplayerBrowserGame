require('@geckos.io/phaser-on-nodejs')
const { GameScene } = require("./core/lib/scenes/GameScene")
const { InitGame } = require("./core/lib/index")
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function (_, res) {
  res.sendFile(__dirname + '/index.html');
});

function setupAuthoritativePhaser() {
    const scene = new GameScene()
    InitGame(scene)
}

setupAuthoritativePhaser();