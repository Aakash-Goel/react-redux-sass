const appConfig  = {};
const nodeEnv    = process.env.NODE_ENV || 'development';
const host       = process.env.HOST || null; // Let http.Server use its default IPv6/4 host
const prettyHost = host || 'localhost';
const PORT       = process.env.PORT || 5555;

appConfig.NODE_ENV = nodeEnv;
appConfig.PORT = PORT;
appConfig.HOST = host;
appConfig.PRETTY_HOST = prettyHost;

module.exports = appConfig;
