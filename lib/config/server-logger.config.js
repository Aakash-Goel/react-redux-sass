const ServerLogger = {

  LOGGER_SETTINGS: {
    name: 'app-log',
    appName: 'app-server-log',
    level: 'info',

    streams: [
      {
        type: 'raw',
        period: '1d',
        rotateExisting: false,
        fileBackupCount: 10,
        filePath: './logs/app.%Y-%m-%d.log',
      },
    ],
  },

};

module.exports = ServerLogger;
