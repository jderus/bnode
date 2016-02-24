// a mini http server
// require('http').createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello Node'); 
// }).listen(4000);

// var util = require('util');
// require('http').createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(util.inspect(req.headers)); 
// }).listen(4000);

// Note: this example doesnt seem to work in chrome.
// var fs = require('fs');
// var util = require('util');
// 
// require('http').createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'video/mp4'});
//    var rs = fs.createReadStream('test.mp4');
//    rs.pipe(res);
// }).listen(4000);

// Pipe out from a child proc seems to have problems too.
var spawn = require('child_process').spawn;
 
 require('http').createServer(function(req,res){
   var child = spawn('cmd.exe', 
     ['dir'],
     {stdio:'inherit'});
     if(child.stdout !== null){
        child.stdout.pipe(res);
        res.on('end', function() {
            child.kill(); 
        });
     }
}).listen(4000);