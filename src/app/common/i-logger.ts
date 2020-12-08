export interface ILogger {
  logTask(name: string, ...message: any[]): void;
  logError(name: string, ...message: any[]): void;
}
