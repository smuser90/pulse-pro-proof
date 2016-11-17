var io = require('socket.io-client');

console.log("Attempting to connect to 1.10.1.124/photo");

var socket = io.connect('1.10.1.124/photo', {port: 48626});

socket.on('connect', function() {
    console.log("We're in business!");
})
