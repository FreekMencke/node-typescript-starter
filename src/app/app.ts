import { Logger } from './common/logger';

export class App {

  logAppInfo(): void {
    Logger.logTask('APP', {
      develop: DEVELOP,
      version: VERSION
    });
  }

}
