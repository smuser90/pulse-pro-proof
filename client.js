var socket = require('socket.io-client')('http://10.1.10.124');
var ss = require('socket.io-stream');
var fs = require('fs');
var filename = 'photo.jpg';
var stream = ss.createStream();

socket.on('connect', function(){
  console.log('We are in business!');
  var fileData = 0;
  socket.emit('push-photo', {fd: fileData});
  // ss(socket).emit('photo-added', stream, {name: filename});
  // fs.createReadStream(filename).pipe(stream);
});

socket.on('event', function(data){});
socket.on('disconnect', function(){});
