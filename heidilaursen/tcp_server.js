const net = require('net');
const fs =  require('fs');

var writeOut = fs.createWriteStream(__dirname + '/log/' + Date() + '.txt');

var server = net.createServer(function(socket) {
  console.log('server running');

  socket.pipe(writeOut);

  socket.on('close', () => {
    console.log('server is disconnected');
    socket.end();
  });
});

server.listen(3000, function() {
  console.log('server up on 3000\n');
});
