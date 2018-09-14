const development = require('./development');
const qa = require('./qa');
const staging = require('./staging');
const production = require('./production');
const defaults = require('./defaults');

const environment = process.env.NODE_ENV || 'development';

const configs = {
  development,
  qa,
  staging,
  production
};

module.exports = Object.assign({ environment }, defaults, configs[environment]);
