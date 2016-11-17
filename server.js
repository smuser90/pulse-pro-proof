var server = require('http').createServer();
var io = require('socket.io')(server);

var PORT = 48626;

io.on('connection', function(socket) {
  console.log("Connection succesful!");
  console.dir(socket);
});

server.listen(PORT, function() {
    console.log('Alpine TestServer online. \nListening on port: ' + PORT + '\n');
});


//
// var ss = require('socket.io-stream');
// var path = require('path');
// var fs = require('file-system');
//
io.of('/photo').on('connection', function(socket) {
  console.log("Client succesfully connected!");
//   ss(socket).on('post-photo', function(stream, data) {
//     var filename = path.basename(data.name);
//     stream.pipe(fs.createWriteStream(filename));
  });
// });
//
// console.log("Server listening on port 3000");
// server.listen(3000);
