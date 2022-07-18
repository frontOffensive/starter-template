import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import { serverStart } from './gulp/tasks/server';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import config from './gulp/config';

config.senEnv();

export const build = series(
	clean,
	parallel(
		pugBuild,
	),
);

export const dev = series(
	build,
	serverStart,
	parallel(
		pugWatch,
	),
);
