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

	images: {
		src: `${sourcePath}/assets/images/**/*.{jpg,jpeg,png,gif,svg,webp}`,
		dest: `${destPath}/images`,
		watch: `${sourcePath}/assets/images/**/*.{jpg,jpeg,png,gif,svg,webp}`,
	},

	fonts: {
		src: `${sourcePath}/assets/fonts/*.{woff,woff2}`,
		dest: `${destPath}/fonts`,
		watch: `${sourcePath}/assets/fonts/*.{woff,woff2}`,
	},

	scripts: {
		src: `${sourcePath}/js/*.js`,
		dest: `${destPath}/js`,
		watch: `${sourcePath}/js/**/*.js`,
		webpackSrc: `${sourcePath}/js`,
	},

	senEnv() {
		this.isProd = process.argv.includes('--prod');
		this.isDev = !this.isProd;
	},
};

export default config;
