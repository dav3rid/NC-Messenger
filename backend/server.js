const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
// CREATES SERVER SOCKET

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// A USER CONNECTS - ALL NOW HAPPENS WITHIN THIS CALLBACK
io.on('connection', socket => {
  // THIS CALLBACK INVOKED WITH socket, THE UNIQUE CONNECTION TO ONE USER
  console.log('user connected');
  // `socket` IS IN SCOPE, `sockets` (all connected users) IS ON io OBJECT
  io.sockets.emit('broadcast', {
    description: ' users connected'
  });

  socket.on('test', data => {
    console.log(data);
    socket.emit('mount test', 'hello');
  });

  // WELCOME MESSAGE ONLY TO NEW CONNECTED USER
  socket.emit('new client connect', {
    description: 'Welcome geezer!'
  });
  // socket.broadcast.emit SENDS TO ALL CURRENTLY CONNECTED CLIENTS - EXCLUDING THE CLIENT THAT CAUSED IT
  socket.broadcast.emit('new client connect', {
    description: 'USER CONNECTED'
  });

  // TEST CUSTOM EVENT FROM CLIENT
  socket.on('tester client event', data => {
    console.log(data);
  });

  // A USER DISCONNECTS
  socket.on('disconnect', () => {
    console.log('user disconnected');
    // DECREMENT TOTAL USERS WITH EACH DISCONNECT

    // EMIT USED TO DEFINE CUSTOM EVENT - FIRST ARGUMENT (STRING)
    // io.sockets.emit SENDS TO ALL CURRENTLY CONNECTED CLIENTS - INCLUDING THE CLIENT THAT CAUSED IT
    io.sockets.emit('broadcast', {
      description: 'a user has left users connected'
    });
  });
});

http.listen(3001, () => {
  console.log('listening on port 3001');
});
