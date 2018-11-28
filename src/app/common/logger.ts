export class Logger {

  static log(...message: any[]): void {
    console.log(`[${Logger.getFormattedTime()}]`, ...message);
  }

  static logTask(name: string, ...message: any[]): void {
    Logger.log(`${name}:`, ...message);
  }

  private static getFormattedTime(includeDate: boolean = true): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    };
    const date = new Date();
    const timeString = date.toLocaleTimeString('en-US', options);
    const dateString = `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}/${date.getUTCDate()}`;
    return includeDate ? `${dateString} ${timeString}` : timeString;
  }

}
