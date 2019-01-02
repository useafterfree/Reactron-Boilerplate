const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const fs = require('fs');

const debug = require('ndebug')('server');

const sockets = [];


// Make sure output exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

app.use('/public', express.static(`${__dirname}/public`));

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

http.listen(3000, function () {
  debug('listening on *:3000');
});

io.on('connection', (socket) => {
  // prompt web UI to send status when client connects
  sockets.push(socket);
  socket.broadcast.emit('new-connection');

  socket.on('disconnect', () => {
    const index = sockets.indexOf(socket);
    if (index > -1) {
      sockets.splice(index, 1);
    }
  });
});
