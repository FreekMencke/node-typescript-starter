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
  }

  private logAppInfo(): void {
    Logger.logTask('APP', {
      develop: DEVELOP,
      version: VERSION,
      config: config,
    });
  }
}
