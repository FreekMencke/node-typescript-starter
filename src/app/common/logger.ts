import { ILogger } from "./i-logger";

export class Logger implements ILogger {
  private static internalInstance: Logger;

  // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
  private static foregroundColorRed = "\x1b[31m";
  private static foregroundColorGreen = "\x1b[32m";
  private static foregroundResetColor = "\x1b[0m";

  private static log(color: string, ...message: any[]): void {
    if (!message || !message.length) {
      return;
    }
    const stringifiedMessages: string[] = [];
    message.forEach((oneMessage: any) => {
      let outputMessage;
      if (typeof oneMessage === 'string') {
        outputMessage = oneMessage
      } else {
        outputMessage = JSON.stringify(oneMessage, null, 4);
      }
      stringifiedMessages.push(color);
      stringifiedMessages.push(outputMessage);
    });
    // eslint-disable-next-line no-console
    console.log(`[${Logger.getFormattedTime()}]`, ...stringifiedMessages);
    console.log(Logger.foregroundResetColor);
  }

  static get instance(): ILogger {
    if (!Logger.internalInstance) {
      Logger.internalInstance = new Logger();
    }

    return Logger.internalInstance;
  }

  private static getUpperCase(nameParam: string) {
    const name = nameParam.toUpperCase();
    return name;
  }

  logTask(nameParam: string, ...message: any[]): void {
    Logger.log(Logger.foregroundColorGreen, `${Logger.getUpperCase(nameParam)}:`, ...message);
  }

  logError(nameParam: string, ...message: any[]) {
    Logger.log(Logger.foregroundColorRed, `${Logger.getUpperCase(nameParam)}:`, ...message);
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
}
