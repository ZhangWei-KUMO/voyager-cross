const childProcess = require('child_process');
const figlet = require('figlet');
const chalk = require('chalk');

function execInstallNPM(cmd, fn) {
  var runner = childProcess.spawn("npm", ["install"], {
    stdio: 'inherit'
  });

  runner.on('close', function (code) {
    console.log(
      chalk.green(
        figlet.textSync('CloudWave', { horizontalLayout: 'full' })
      )
    );
    console.log(
      chalk.green("cd <YOUR_PROJECT_DIR> && npm run dev")
    );
    console.log(
      chalk.green("You can checkout more details information in README.md")
    );
    console.log(
      chalk.green("If you have any question:cloudwave.suzhou@gmail.com")
    );
    if (fn) {
      fn(code);
    }
  })
}

module.exports = execInstallNPM;