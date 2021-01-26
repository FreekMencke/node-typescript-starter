import { App } from './app/app';
import { Logger } from './app/common/logger';

const systemName = 'System';
Logger.instance.logTask(systemName, 'STARTING');

App.run();

Logger.instance.logTask(systemName, 'FINISHED');
