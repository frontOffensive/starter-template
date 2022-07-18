const sourcePath = './source';
const destPath = './build';

const config = {
	clean: {
		src: destPath,
	},

	server: {
		baseDir: destPath,
	},

	senEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
