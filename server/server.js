const io = require('socket.io')(3001, {
  cors: {
    origin: ['http://localhost:8080'],
  },
});

io.on('connection', (socket) => {
  console.log('some on has connected', socket.id);
  socket.on('send-message', (message, room) => {
    if (room === '') {
      //no room broadcast to everyone exepct the socket who sent the message
      socket.broadcast.emit('send-back-message', message);
    } else {
      socket.to(room).emit('send-back-message', message);
    }
  });
});
