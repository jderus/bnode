var spawn = require('child_process').spawn;
var child = spawn('cmd.exe', 
     ['dir'],
     {stdio:'inherit'});

child.stdout.on('data', function(data){
   console.log('data from child: ' + data); 
});

child.stderr.on('data', function(data){
   console.log('child epic fail'); 
});

child.on('exit', function(code){
   console.log('child process has terminated with code ' + code); 
});