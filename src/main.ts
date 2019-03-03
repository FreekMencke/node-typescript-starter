import { App } from './app/app';
import { Logger } from './app/common/logger';

Logger.logTask('SYSTEM', 'STARTING');

new App().start();

Logger.logTask('SYSTEM', 'FINISHED');
