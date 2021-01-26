import { config } from '../config/config';
import { Logger } from './common/logger';

export class App {
  private readonly appName = 'App';

  static run(): App {
    const app = new App();
    app.start();
    return app;
  }

  private start(): void {
    this.logAppInfo();
    this.logAppError();
  }

  private logAppInfo(): void {
    Logger.instance.logTask(this.appName, {
      develop: DEVELOP,
      version: VERSION,
      config: config,
    });
  }

  private logAppError(): void {
    Logger.instance.logError(this.appName, "an error occurred:", "additional error info");
  }
}
