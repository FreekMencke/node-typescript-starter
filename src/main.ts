import { App } from './app/app';
import { Logger } from './app/common/logger';

const System = () => {
  Logger.instance.logTask(System.name, 'STARTING');

  App.run();

  Logger.instance.logTask(System.name, 'FINISHED');
};
System();
