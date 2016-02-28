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


// var net = require('net');
// var PORT = 5000;
// var conn;
// 
// process.stdin.resume();
// 
// (function connect() {
//     conn = net.createConnection(PORT);
//     
//     conn.on('connect', function() {
//        console.log('Connected to server'); 
//     });
//     
//     conn.on('error', function(err){
//        console.log('Error in connection: ',err); 
//     });
//     
//     conn.on('close', function() {
//        console.log('Connection Closed, attempt reconnect');
//        connect(); 
//     });
//     
//     conn.pipe(process.stdout, {end: false});
//     process.stdin.pipe(conn);
// }());

// Being dumb. Run the server tcp_proto first. :(
var net = require('net');
var PORT = 4242;
var conn;

var quitting = false;
var retryInterval = 3000;
var retriedTimes = 0;
var maxRetries = 5;

process.stdin.resume();
process.stdin.on('data', function(data){
    if (data.toString().trim().toLowerCase() === 'quit') {
        quitting = true;
        console.log('quitting ...');
        conn.end();
        process.stdin.pause();
    } else {
        conn.write(data);
    }
});


(function connect() {
    function reconnect() {
        if (retriedTimes >= maxRetries){
            throw new Error('Max retries. I give up!');
        }
        retriedTimes += 1;
        setTimeout(connect, retryInterval);
    }
        
    conn = net.createConnection(PORT);
    
    conn.on('connect', function() {
       retriedTimes = 0;
       console.log('Connected to server'); 
    });
    
    conn.on('error', function(err){
       console.log('Error in connection: ',err); 
    });
    
    conn.on('close', function() {
        if (! quitting) {
            console.log('Connection Closed, attempt reconnect');
            reconnect(); 
        }
    });
    
    conn.pipe(process.stdout, {end: false});
}());