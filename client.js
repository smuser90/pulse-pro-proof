var io = require('socket.io-client');

var socket = io.connect('http://10.1.10.124', {port: 48626});

socket.on('connect', function() {
    console.log("We're in business!");
})
