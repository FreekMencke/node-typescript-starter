import { App } from './app/app';
import { Logger } from './app/common/logger';

(function System() {
  Logger.instance.logTask(System.name, 'STARTING');

  App.run();

  Logger.instance.logTask(System.name, 'FINISHED');
})();
