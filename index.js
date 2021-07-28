require('@geckos.io/phaser-on-nodejs')
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { SetupServer } = require("./server/index");

app.use(express.static(__dirname + '/client/build'));
app.use('/assets',express.static(__dirname + '/core/src/assets'));
app.get('/', function (_, res) {
  //Serve client root file
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function (_, res) {
  //Serve client root file
  res.sendFile(__dirname + '/index.html');
});

SetupServer(server)
server.listen(8080, () => {
  console.log("[Server] :: Successfully started")
})