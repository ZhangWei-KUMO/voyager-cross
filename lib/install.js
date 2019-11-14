const childProcess = require('child_process');
const figlet = require('figlet');
const chalk = require('chalk');

function execInstallNPM(cmd, fn) {
  var runner = childProcess.spawn("yarn", [], {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    console.log(
      chalk.green(
        figlet.textSync('Cloud-Wave.cn', { horizontalLayout: 'full' })
      )
    );
    console.log(
      chalk.green("cd <YOUR_PROJECT_DIR> && npm dev")
    );
    console.log(
      chalk.green("You can checkout more details information in README.md")
    );
    if (fn) {
      fn(code);
    }
  })
}

module.exports = execInstallNPM;