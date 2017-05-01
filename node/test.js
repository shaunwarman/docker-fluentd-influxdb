const Logger = require('./index');

const logger = new Logger();

setTimeout(() => {
  let a = 0;
  setInterval(() => {
    logger.log('INFO', {event: 'log', timestamp: Date.now(), data: a++});
  }, 100);
}, 10000);
