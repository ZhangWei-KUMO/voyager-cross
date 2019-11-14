var childProcess = require('child_process');
const figlet = require('figlet');

function execInstallNPM(cmd, fn) {
  var runner = childProcess.spawn("yarn", [], {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    console.log(
      chalk.green(
        figlet.textSync('React Template of Cloud-Wave.cn', { horizontalLayout: 'full' })
      )
    );
    if (fn) {
      fn(code);
    }
  })
}

module.exports = execInstallNPM;