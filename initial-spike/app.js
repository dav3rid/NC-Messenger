const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
// CREATES SERVER SOCKET

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// CURRENTLY CONNECTED USERS
let clients = 0;

// A USER CONNECTS - ALL NOW HAPPENS WITHIN THIS CALLBACK
io.on('connection', socket => {
  // THIS CALLBACK INVOKED WITH socket, THE UNIQUE CONNECTION TO ONE USER
  console.log('user connected');
  // INCREMENT TOTAL USERS WITH EACH CONNECTION
  clients++;
  // `socket` IS IN SCOPE, `sockets` (all connected users) IS ON io OBJECT
  io.sockets.emit('broadcast', {
    description: clients + ' users connected'
  });

  // WELCOME MESSAGE ONLY TO NEW CONNECTED USER
  socket.emit('new client connect', {
    description: 'Welcome geezer!'
  });
  // socket.broadcast.emit SENDS TO ALL CURRENTLY CONNECTED CLIENTS - EXCLUDING THE CLIENT THAT CAUSED IT
  socket.broadcast.emit('new client connect', {
    description: 'a new user has joined!' + clients + ' users connected'
  });

  // // TEST CUSTOM EVENT TO CLIENT
  // setTimeout(() => {
  //   socket.emit('tester event', {
  //     description: 'this is a custom event after 2 seconds'
  //   });
  // }, 2000);

  // TEST CUSTOM EVENT FROM CLIENT
  socket.on('tester client event', data => {
    console.log(data);
  });

  // A USER DISCONNECTS
  socket.on('disconnect', () => {
    console.log('user disconnected');
    // DECREMENT TOTAL USERS WITH EACH DISCONNECT
    clients--;
    // EMIT USED TO DEFINE CUSTOM EVENT - FIRST ARGUMENT (STRING)
    // io.sockets.emit SENDS TO ALL CURRENTLY CONNECTED CLIENTS - INCLUDING THE CLIENT THAT CAUSED IT
    io.sockets.emit('broadcast', {
      description: 'a user has left' + clients + ' users connected'
    });
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
