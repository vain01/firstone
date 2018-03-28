/*
* User service logger配置
*/
const log4js = require('log4js');

log4js.configure({
    appenders: {
        console: {
            type: 'console'
        },
        log: {
            type: "dateFile",
            filename: "./logs/userService",
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['console', 'log'], level: 'info' }
    }
});

let logger = log4js.getLogger('log')
module.exports = {
    trace: function trace(str) {
        logger.trace(str)
    },
    debug: function debug(str) {
        logger.debug(str)
    },
    info: function info(str) {
        logger.info(str)
    },
    warn: function warn(str) {
        logger.warn(str)
    },
    error: function error(str) {
        logger.error(str)
    },
    fatal: function fatal(str) {
        logger.fatal(str)
    }
}