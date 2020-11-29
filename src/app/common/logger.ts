import { configure, getLogger, Logger as Log4jsLogger } from "log4js";

export class Logger {
  private static logger: Log4jsLogger;

  static setupLog4js() {
    configure({
      appenders: { console: { type: 'console' } },
      categories: { default: { appenders: ['console'], level: 'debug' } }
    });
    Logger.logger = getLogger('default');
  }

  static log(...message: any[]): void {
    if (!Logger.logger) {
      Logger.setupLog4js();
    }
    Logger.logger.info('', ...message);
  }

  static logTask(name: string, ...message: any[]): void {
    Logger.log(`${name}:`, ...message);
  }
}
