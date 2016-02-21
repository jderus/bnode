var fs = require('fs');

require('http').createServer(function(req,res){
    var rs = fs.createReadStream('server.js');
    
    rs.pipe(res, {end: false});
    
    rs.on('end', function(){
        res.write('EOP');
        res.end();
    });
}).listen(8989);