import path from 'path';
import config from './gulp/config';

const webpackConfig = {
	context: path.resolve(__dirname, config.scripts.webpackSrc),
	entry: {
		script: './script.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, config.scripts.dest),
	},
	optimization: {
		minimize: config.isProd,
	},
	mode: config.isDev ? 'development' : 'production',
	devtool: config.isDev ? 'eval-source-map' : false,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
		],
	},
};

export default webpackConfig;
