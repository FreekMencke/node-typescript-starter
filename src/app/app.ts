import { config } from '../config/config';
import { Logger } from './common/logger';

export class App {
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
    Logger.instance.logTask(App.name, {
      develop: DEVELOP,
      version: VERSION,
      config: config,
    });
  }

  private logAppError(): void {
    Logger.instance.logError(App.name, "an error occurred:", "additional error info");
  }
}
