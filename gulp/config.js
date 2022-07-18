const sourcePath = './source';
const destPath = './build';

const config = {
	clean: {
		src: destPath,
	},

	senEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
