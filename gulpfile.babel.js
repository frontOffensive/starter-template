import { series, parallel } from 'gulp';
import config from './gulp/config';

config.senEnv();

export const build = series(
	parallel(),
);

export const dev = series(
	parallel(),
);
