export class Logger {
  static log(...message: any[]): void {
    // eslint-disable-next-line no-console
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
      timeZone: 'UTC',
    };

    const date = new Date();
    const timeString = date.toLocaleTimeString('en-US', options);

    const year = date.getUTCFullYear();
    const month = this.prependZeroIfNecessairy(date.getUTCMonth() + 1); // months start from zero
    const day = this.prependZeroIfNecessairy(date.getUTCDate());
    const dateString = `${year}/${month}/${day}`;

    return includeDate ? `${dateString} ${timeString}` : timeString;
  }

  private static prependZeroIfNecessairy(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }
}
