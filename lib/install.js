var childProcess = require('child_process');

function execInstallNPM(cmd, fn) {
  var runner = childProcess.spawn("yarn", [], {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  })
}

module.exports = execInstallNPM;