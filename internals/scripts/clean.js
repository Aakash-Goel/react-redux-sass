require('shelljs/global');
const chalk = require('chalk');
const addCheckMark = require('./helpers/checkmark.js');

if (!which('git')) {
  echo('[ERROR:] Sorry, this script requires git');
  exit(1);
}
process.stdout.write('[PROGRESS:] Cleanup Started...');

addCheckMark();

echo(`\n[SUCCESS:] Cleanup Done. ${chalk.yellow('Happy Coding!!!')}`);
