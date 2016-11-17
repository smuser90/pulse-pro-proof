var socket = require('socket.io-client')('http://10.1.10.124');
socket.on('connect', function(){
  console.log('We are in business!');
});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
