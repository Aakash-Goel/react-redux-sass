import { resolve } from 'path';
import express from 'express';

import {
  PORT,
  NODE_ENV,
  HOST,
  PRETTY_HOST,
} from './config/app.config';
import setup from './setup';
import consoleLog from './logger';
// import loadLoggerConfig from './config/logger-loader.config';

const cwd = process.cwd();
const app = express();

// consoleLog.appStarted(PORT, PRETTY_HOST, NODE_ENV);
// process.exit(1);

/* BOOTSTRAP APP - PROD OR DEV */
setup(app, {
  outputPath: resolve(cwd, 'dist'),
  publicPath: '/',
});

// Always return the main index.html, so react-router render the route in the client
// TODO: to improve after react-router
app.get('*', (req, res) => {
  res.sendFile(resolve(cwd, 'dist', 'index.html'));
});

app.listen(PORT, HOST, (err) => {
  // loadLoggerConfig();

  if (err) {
    consoleLog.error(err.message);
  }

  consoleLog.appStarted(PORT, PRETTY_HOST, NODE_ENV);
});
