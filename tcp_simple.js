// // CONNREFUSED, bug in tut?
// var net = require('net');
// var PORT = 5000;
// var conn = net.createConnection(PORT);
// 
// conn.on('connect', function(){
//    console.log('connected to server'); 
// });
// 
// conn.on('error', function(err){
//    console.log('Error in connection: ', err); 
// });


var net = require('net');
var PORT = 5000;
var conn;

process.stdin.resume();

(function connect() {
    conn = net.createConnection(PORT);
    
    conn.on('connect', function() {
       console.log('Connected to server'); 
    });
    
    conn.on('error', function(err){
       console.log('Error in connection: ',err); 
    });
    
    conn.on('close', function() {
       console.log('Connection Closed, attempt reconnect');
       connect(); 
    });
    
    conn.pipe(process.stdout, {end: false});
    process.stdin.pipe(conn);
}());
