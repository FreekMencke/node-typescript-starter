import { Logger } from './common/logger';
import { config } from '../config/config';

export class App {

  constructor() {
    Logger.logTask('APP', 'RUNNING app.ts CONSTRUCTOR');
  }

  logAppInfo(): void {
    Logger.logTask('APP', {
      develop: DEVELOP,
      version: VERSION,
      config: config
    });
  }

}
