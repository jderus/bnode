var net = require('net');

var server = net.createServer();
var PORT = 4242;
var TIMEOUT = 30000;
var sockets = [];

server.on('listening', function() {
   console.log('Server is listening on port', PORT); 
});

server.on('connection', function(socket) {
   console.log('got a new connection'); 
   
   sockets.push(socket);
   
   socket.setEncoding('utf8');
   socket.setTimeout(TIMEOUT);
   
   socket.on('data', function(data){
       console.log('got data: ', data);
       
       sockets.forEach(function(otherSocket) {
           if (otherSocket !== socket) {
               otherSocket.write(data);
           }
       });
   });
   
   socket.on('close', function() {
       console.log('connection closed');
       var index = sockets.indexOf(socket);
       sockets.splice(index,1);
   })
   
   socket.on('timeout', function() {
      socket.end('idle itmeout. disco.'); 
   });
   
   socket.on('end', function() {
      console.log('Client connection ended.'); 
   });
   
});

server.on('close', function() {
   console.log('Server is now closed'); 
});

server.on('error', function(err){
   console.log('Error: ', err.message); 
});

server.listen(PORT);
