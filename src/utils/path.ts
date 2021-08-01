import { join, resolve } from 'path';

// cli 目录
export const ROOT_CLI_PATH = function(dir: string) {
	return resolve(__dirname, '../../', dir);
};


// nutui src 目录
export const ROOT_PACKAGE_PATH = function(dir: string) {
	return resolve(__dirname, '../../../../../', dir);
};