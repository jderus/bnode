var server = require('net').createServer();
var port = 4242;

server.on('listening', function(){
   console.log('Server is listening on port', port); 
});

server.on('connection', function(socket) {
   console.log('Server has a new connection');
   
   socket.setEncoding('utf8');
   socket.write("Yo. Start typing. 'quit' shuts me up.");
   
   socket.on('data', function(data){
      console.log('got:', data.toString());
      if (data.trim().toLowerCase() === 'quit') {
          socket.write('Cya.');
          return socket.end();
      }
      
      socket.write(data);
   });
   
   socket.on('end', function(){
      console.log('Client connection ended.'); 
   });
});

server.on('close', function() {
   console.log('Server is now closed'); 
});

server.on('error', function(err){
   console.log('Error: ', err.message); 
});

server.listen(port);