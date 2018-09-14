var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require("fs");

const debug = require('ndebug')('server');

const sockets = [];


// Make sure output exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, function() {
  debug('listening on *:3000');
});

io.on('connection', (socket) => {
  //prompt web UI to send status when camera connects
  sockets.push(socket);
  socket.broadcast.emit('new-connection');

  socket.on('disconnect', () => {
    var index = sockets.indexOf(socket);
    if (index > -1) {
        sockets.splice(index, 1);
    }
  });

  socket.on('something', (msg) => {
    debug('something');
  });
});