var io = require('socket.io')();
io.on('connection', function(client){
  console.log("We're in business!");
});
io.listen(42058);
