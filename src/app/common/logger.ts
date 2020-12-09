import { ILogger } from "./i-logger";
import { LogLevel } from "./log-level.enum";

export class Logger implements ILogger {
  private static internalInstance: Logger;

  private static getPrefix(nameParam: string) {
    return `${Logger.getUpperCase(nameParam)}:`;
  }

  private static getUpperCase(name: string) {
    const upperCaseName = name.toUpperCase();
    return upperCaseName;
  }

  private static getTimeStamp() {
    return `[${Logger.getFormattedTime()}]`;
  }

  private static getFormattedTime(includeDate: boolean = true): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    };

    const date = new Date();
    const timeString = date.toLocaleTimeString('en-US', options);

    const year = date.getUTCFullYear();
    const month = this.prependZeroIfNecessary(date.getUTCMonth() + 1); // months start from zero
    const day = this.prependZeroIfNecessary(date.getUTCDate());
    const dateString = `${year}/${month}/${day}`;

    return includeDate ? `${dateString} ${timeString}` : timeString;
  }

  private static prependZeroIfNecessary(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }

  private static log(logLevel: LogLevel, name: string, ...message: any[]): void {
    if (!message || !message.length) {
      return;
    }

    switch (logLevel) {
      case LogLevel.log:
        // eslint-disable-next-line no-console
        console.log(Logger.getTimeStamp(), Logger.getPrefix(name), ...message);
        break;
      case LogLevel.error:
        // eslint-disable-next-line no-console
        console.error(Logger.getTimeStamp(), Logger.getPrefix(name), ...message);
        break;
      default:
        break;
    }
  }

  static get instance(): ILogger {
    if (!Logger.internalInstance) {
      Logger.internalInstance = new Logger();
    }

    return Logger.internalInstance;
  }

  logTask(name: string, ...message: any[]): void {
    Logger.log(LogLevel.log, name, ...message);
  }

  logError(name: string, ...message: any[]) {
    Logger.log(LogLevel.error, name, ...message);
  }
}
