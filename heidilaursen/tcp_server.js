'use strict'

const net = require('net');
const fs =  require('fs');


var server = net.createServer((socket) => {
  socket.write('HTTP/1.1 200');
  socket.write('Content-Type: text/plain');
  console.log('server running');

  process.stdin.on('data', (chunk) => {
    //is there an fs.createWriteStream that is better that writeFile?
    fs.writeFile(__dirname + '/files/' + Date.now() + '.txt', 'This text file was made on ' + Date() + '\n' + chunk);
    chunk = chunk.toString().toUpperCase();
    process.stdout.write(chunk);
  });

  socket.on('close', () => {
    console.log('server is disconnected');
    socket.end();
  });
});

server.listen(3000, function() {
  console.log('server up on 3000\n');
});



// //code from 401d1

// socket.end();
