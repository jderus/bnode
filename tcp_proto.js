require('net').createServer(function(socket){
   //new connection
   socket.on('data', function(data){
      console.log('got data'); 
   });
   socket.on('end', function(data){
      console.log('connection closed'); 
   });
   
   socket.write('Some string');
   
}).listen(4242);