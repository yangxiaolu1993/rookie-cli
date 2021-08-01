"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_PACKAGE_PATH = exports.ROOT_CLI_PATH = void 0;
var path_1 = require("path");
// cli 目录
var ROOT_CLI_PATH = function (dir) {
    return path_1.resolve(__dirname, '../../', dir);
};
exports.ROOT_CLI_PATH = ROOT_CLI_PATH;
// nutui src 目录
var ROOT_PACKAGE_PATH = function (dir) {
    return path_1.resolve(__dirname, '../../../../../', dir);
};
exports.ROOT_PACKAGE_PATH = ROOT_PACKAGE_PATH;
//# sourceMappingURL=path.js.map