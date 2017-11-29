/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const serverLoggerConfig = path.join(process.cwd(), '/lib/config/server-logger.config.js');
let logConfigLocation = '/lib/config/';

const loggerBase = require('../../lib/server-logger');
const logger = loggerBase.getServerLoggerInstance('loggerLoader-Config');

/**
 * For local development user server/data path else use
 * the one specified in environments.js
 * @return {[type]} [description]
 */
function getlogFilePath() {
  if (!fs.existsSync(logConfigLocation)) {
    logConfigLocation = './lib/config/';
  }
  logger.info('Log Loader ::: getlogFilePath logConfigLocation', logConfigLocation);
  return logConfigLocation;
}

/**
 * './lib/config/' + 'clientLoggerConfig.js'
 * @param  {[type]} LogFilePath [description]
 * @param  {[type]} files        [description]
 * @return {[type]}              [description]
 */

function constructFileFullPath(logFilePath, files) {
  const filesWithFullPath = files.map((fileName) => {
    return logFilePath + fileName;
  });
  logger.debug('Log Loader ::: Valid Log files full Path: ', filesWithFullPath);
  return filesWithFullPath;
}

function copyData(destPath, srcPath) {
  fs.readFile(destPath, 'utf8', (err, data) => {
    if (err) throw err;
    // write file
    fs.writeFile(destPath, data, (error) => {
      if (error) throw error;
      logger.info('::: Logger config files loaded :::', srcPath);
    });
  });
}
/**
 * Load Log file from the configured path
 * TODO: Load multiple locale specific Logs.
 * @return {[type]} [description]
 */
function loadLoggerConfig() {
  const logFilePath = getlogFilePath();
  fs.readdir(logFilePath, (error, filenames) => {
    if (error) {
      logger.info('::: cannot readdir :::', error);
    }
    const filesWithFullPath = constructFileFullPath(logFilePath, filenames);
    filesWithFullPath.forEach((srcPath) => {
      if (srcPath === './lib/config/clientLoggerConfig.js') {
        console.log('client-logger --->>> ');
        // copyData(clientLoggerConfig, srcPath);
      } else {
        console.log('server-logger --->>> ');
        copyData(serverLoggerConfig, srcPath);
      }
    });
  });
}
module.exports = loadLoggerConfig;
