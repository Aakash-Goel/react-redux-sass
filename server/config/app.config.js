const defaultAppConfig = {};
const nodeEnv = process.env.NODE_ENV || 'development';
const host = process.env.HOST || null; // Let http.Server use its default IPv6/4 host
const prettyHost = host || 'localhost';
const PORT = process.env.PORT || 5555;

defaultAppConfig.NODE_ENV = nodeEnv;
defaultAppConfig.PORT = PORT;
defaultAppConfig.HOST = host;
defaultAppConfig.PRETTY_HOST = prettyHost;

module.exports = defaultAppConfig;
