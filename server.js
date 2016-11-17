var server = require('http').createServer();
var io = require('socket.io')(server);

var PORT = 80;

io.on('connection', function(socket) {
  console.log("Connection succesful!");
  socket.on('disconnect', function(){
    console.log("Client disconnected");
  });
});

server.listen(PORT, function() {
    console.log('Alpine TestServer online. \nListening on port: ' + PORT + '\n');
});
