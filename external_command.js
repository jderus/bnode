var exec = require('child_process').exec

var options = {
    // shell: 'powershell', NOTE: Would love for this to work, but cannot find an example.
    timeout: 100000,
    killSignal: 'SIGKILL'
};

// the example I saw used cat *.js. Default Node behavior is to use cmd.exe, which may not recognize cat.
// this causes err.code == 1. Instead, use a shell (posh) that is configured to recognize cat.
exec('powershell.exe -Command "cat *.js"', options, function(err, stdout, stderr) {
  if(err){
    console.log('child process exited with error code', err.code);
    return
  }
  console.log(stdout);
});
