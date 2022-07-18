import del from 'del';
import config from '../config';

const clean = () => del(config.clean.src);

export default clean;
