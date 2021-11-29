require('@geckos.io/phaser-on-nodejs')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const { SetupServer } = require("./server/index");
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/build'));
app.use('/assets',express.static(__dirname + '/core/src/assets'));
app.use(bodyParser.json({ extended: true }));

// app.get('*', function (_, res) {
//   //Serve client root file
//   res.sendFile(__dirname + '/build');
// });

let mockNextId = 1

app.post('/login', function (req, res) {
  try {
    console.log(req.body)
    const {username, password} = req.body
    console.log(`[Login] :: Trying logging with username: ${username}, password: ${password}`)
    res.status(200).send({playerId: mockNextId.toString(), message: "Logged success!", ok: true})
    mockNextId++
  } catch (error) {
    console.log(error)
    res.status(400).send({ok: false, message: "Logging failed"})
  }
});


SetupServer(server)
server.listen(PORT, () => {
  console.log("[Server] :: Successfully started")
})