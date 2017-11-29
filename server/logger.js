/* eslint-disable no-console */
import chalk from 'chalk';
import ip from 'ip';

import loggerBase from '../lib/server-logger';

const logger = loggerBase.getServerLoggerInstance('index');
const divider = chalk.gray('\n--------------------------------------------------');

const consoleLog = {

  error: (err) => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host, NODE_ENV) => {
    console.log(`
      Server started ! ${chalk.green('✓')}
    `);
    logger.info({
      host,
      port,
      'ip-address': `${ip.address()}`,
      'node-env': NODE_ENV,
    });
    console.log(`
      ${chalk.bold('Server is Configured for:')} ${divider}
      Localhost: ${chalk.magenta(`http://${host}:${port}`)}
            LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
       NODE_ENV: ${chalk.magenta(`${NODE_ENV}`)} ${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },

};

module.exports = consoleLog;
