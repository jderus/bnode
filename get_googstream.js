var http = require('http');
var fs = require('fs');

var options = {
    host: "www.google.com",
    port: 80,
    path: "/",
    method: "GET"    
}

//should read up on how to mkdir in node.
var file = fs.createWriteStream('./dump.txt');

http.request(options, function(res){
    res.pipe(file);
}).end();