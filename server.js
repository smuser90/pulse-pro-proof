var server = require('http').createServer();
var io = require('socket.io')(server);
var ss = require('socket.io-stream');
var path = require('path');
var fs = require('fs');
var PORT = 80;

io.on('connection', function(socket) {
  console.log("Connection succesful!");
  ss(socket).on('photo-added', function(stream, data){
    var filename = path.basename(data.name);
    var writeStream = fs.createWriteStream(filename);
    writeStream.on('close', function(){
      console.log("Stream finished writing");
    });
    stream.pipe(writeStream);

  });
  socket.on('disconnect', function(){
    console.log("Client disconnected");
  });
});

server.listen(PORT, function() {
    console.log('Alpine TestServer online. \nListening on port: ' + PORT + '\n');
});
