import { App } from './app/app';
import { Logger } from './app/common/logger';

Logger.logTask('SYSTEM', 'STARTING');

const app = new App();
app.logAppInfo();

Logger.logTask('SYSTEM', 'FINISHED');
