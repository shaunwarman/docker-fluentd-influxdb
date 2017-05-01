const {EventEmitter} = require('events');

class Logger extends EventEmitter {
  constructor(options) {
    super();

    this.types = ['INFO', 'WARN', 'DEBUG', 'ERROR'];

    this.on('log', (type, log) => {
      this.write({type, data: JSON.stringify(log)});
    });
  }

  log(type, log) {
    if (!this.types.includes(type))
      throw new Error('Type is not supported!');

    this.emit('log', type, log);
  }

  write(log) {
    console.log(JSON.stringify(log));
  }
}

module.exports = Logger;
