import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import config from './gulp/config';

config.senEnv();

export const build = series(
	clean,
	parallel(),
);

export const dev = series(
	parallel(),
);
