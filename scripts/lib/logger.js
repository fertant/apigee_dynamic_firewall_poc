const winston = require('winston');

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      timestamp: true,
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});
