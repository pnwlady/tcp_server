const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  const text = fs.createWriteStream(__dirname + '/log/log_' + Date.now() + '.txt');
  socket.pipe(text);
  socket.write('HTTP/1.1 200 OK');
  socket.on('timeout', () => {
    socket.end();
  });
  socket.setTimeout(100);
  socket.pipe(socket);
});

server.listen(8080, () => {
  process.stdout.write('server up on 8080');
});

exports.server = server;
