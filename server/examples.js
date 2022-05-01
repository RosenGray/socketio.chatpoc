socket.emit('custom-event', 10, 'hi', { name: 'vladi' });
socket.on('custom-event', (numb, str, obj) => {
  console.log(numb, str, obj);
});

// io.on('connection', (socket) => {
//   console.log('some on has connected', socket.id);
// });

// const io = new Server(3001, {
//   cors: {
//     origin: ['http://localhost:8080'],
//   },
// });

// io.on('connection', (socket) => {
//   //socket id
//   console.log('some on has connected', socket.id);
//   socket.on('send-message', (message, room) => {
//     if (room === '') {
//       //no room broadcast to everyone exepct the socket who sent the message
//       socket.broadcast.emit('send-back-message', message);
//     } else {
//       socket.to(room).emit('send-back-message', message);
//     }
//   });
// });

// io.on('connection', (socket) => {
//   console.log('some on made a connection with id:', socket.id);
//   socket.on('send-message', (message) => {
//     socket.broadcast.emit('send-back-message', message);
//   });
// });
