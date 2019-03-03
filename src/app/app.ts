import { config } from '../config/config.dev';
import { Logger } from './common/logger';

export class App {
  start(): void {
    this.logAppInfo();
  }

  private logAppInfo(): void {
    Logger.logTask(
      'APP',
      JSON.stringify({
        develop: DEVELOP,
        version: VERSION,
        config: config,
      })
    );
  }
}
