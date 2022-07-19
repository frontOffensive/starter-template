import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import { serverStart } from './gulp/tasks/server';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { stylusBuild, stylusWatch } from './gulp/tasks/stylus';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import config from './gulp/config';

config.senEnv();

export const build = series(
	clean,
	parallel(
		pugBuild,
		stylusBuild,
		imagesBuild,
		scriptsBuild,
	),
);

export const dev = series(
	build,
	serverStart,
	parallel(
		pugWatch,
		stylusWatch,
		imagesWatch,
		scriptsWatch,
	),
);
