import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import { serverStart } from './gulp/tasks/server';
import config from './gulp/config';

config.senEnv();

export const build = series(
	clean,
	parallel(),
);

export const dev = series(
	serverStart,
	parallel(),
);
