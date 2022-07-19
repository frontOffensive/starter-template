const sourcePath = './source';
const destPath = './build';

const config = {
	clean: {
		src: destPath,
	},

	server: {
		baseDir: destPath,
	},

	pug: {
		src: `${sourcePath}/pug/pages/*.pug`,
		dest: destPath,
		watch: `${sourcePath}/pug/**/*.pug`,
	},

	stylus: {
		src: `${sourcePath}/stylus/*.styl`,
		dest: `${destPath}/css`,
		watch: `${sourcePath}/stylus/**/*.styl`,
	},

	senEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
