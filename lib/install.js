var childProcess = require('child_process');

function execInstallNPM(cmd, fn) {
  var runner = childProcess.spawn("npm", ["install"], {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  })
}

module.exports = execInstallNPM;