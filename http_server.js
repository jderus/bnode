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

var fs = require('fs');
var util = require('util');

require('http').createServer(function(req,res){
   res.writeHead(200, {'Content-Type': 'video/mp4'});
   var rs = fs.createReadStream('test.mp4');
   rs.pipe(res);
}).listen(4000);