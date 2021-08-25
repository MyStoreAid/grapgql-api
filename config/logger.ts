const bunyan = require('bunyan');
const getenv = require('getenv')

const level = getenv === 'production' ? 'info' : 'debug';

const logger = bunyan.createLogger({
  name: 'logger',
  stream: process.stdout,
  level,
});

export {
  logger
}


