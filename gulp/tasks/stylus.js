import {
	src, dest, watch, series,
} from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import stylus from 'gulp-stylus';
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import gcmq from 'gulp-group-css-media-queries';
import { serverReload } from './server';
import config from '../config';

const stylusBuild = () => (
	src(config.stylus.src)
		.pipe(plumber({
			errorHandler: notify.onError((error) => ({
				title: 'Stylus',
				message: error.message,
			})),
		}))
		.pipe(stylus())
		.pipe(autoPrefixer({
			cascade: true,
		}))
		.pipe(gcmq())
		.pipe(csso())
		.pipe(dest(config.stylus.dest))
);

const stylusWatch = () => watch(
	config.stylus.watch,
	series(stylusBuild, serverReload),
);

export { stylusBuild, stylusWatch };
