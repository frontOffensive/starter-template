import {
	src, dest, watch, series,
} from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { serverReload } from './server';
import config from '../config';

const fontsBuild = () => (
	src(config.fonts.src)
		.pipe(plumber({
			errorHandler: notify.onError((error) => ({
				title: 'Fonts',
				message: error.message,
			})),
		}))
		.pipe(dest(config.fonts.dest))
);

const fontsWatch = () => watch(
	config.fonts.watch,
	series(fontsBuild, serverReload),
);

export { fontsBuild, fontsWatch };
