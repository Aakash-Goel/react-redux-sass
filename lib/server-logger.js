import bunyan from 'bunyan';
import RotatingFileStream from 'bunyan-rotating-file-stream';

import { LOGGER_SETTINGS } from './config/server-logger.config';

let loggerInstance = null;

const getStreams = (streams) => {
  const streamList = [];

  streams.forEach((stream) => {
    const streamObj = {
      type: stream.type,
      stream: new RotatingFileStream({
        path: stream.filePath,
        period: stream.period,
        totalFiles: stream.fileBackupCount,
        rotateExisting: stream.rotateExisting,
      }),
    };
    streamList.push(streamObj);
  });

  return streamList;
};

exports.getServerLoggerInstance = (subModuleName) => {
  if (!loggerInstance) {
    loggerInstance = bunyan.createLogger({
      src: true,
      name: LOGGER_SETTINGS.appName,
      streams: getStreams(LOGGER_SETTINGS.streams),
      level: LOGGER_SETTINGS.level,
    });
  }

  return loggerInstance.child({
    subModule: subModuleName,
  });
};
