var env = process.env,
    varName,
    envCopy = {},
    exec = require('child_process').exec;

for (varName in env) {
  envCopy[varName] = env [varName]
}

envCopy['CUSTOM ENV VAR'] = 'some value';
envCopy['CUSTOM ENV VAR 2'] = 'other value';

exec('powershell -Command "dir"', {env:envCopy}, function(err, stdout, stderr){
  if(err) { throw err;}
  console.log('stdout: \n', stdout);
  console.log('stderr: \n', stderr);
});
