const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('msg_send', (data) => {
    console.log(data);
    // io.emit('msg_rcvd', data);
    // socket.emit('msg_rcvd', data);
    socket.broadcast.emit('msg_rcvd', data); //other then self rcvd message
  });
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
  console.log('Server Started');
});
