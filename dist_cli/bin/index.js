#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../utils/path");
var commander_1 = __importDefault(require("commander"));
var add_1 = require("../commands/add");
var create_1 = require("../commands/create");
// 定义当前版本
commander_1.default
    .version(require(path_1.ROOT_CLI_PATH('package')).version)
    .usage('<command> [options]')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates');
// 定义四个指令
commander_1.default
    .command('create <project>')
    .description('初始化项目模板')
    .action(function (projectname) {
    create_1.create(projectname);
});
commander_1.default
    .command('add')
    .description('add a new template')
    .action(add_1.add);
// 解析命令行参数
commander_1.default.parse(process.argv);
//# sourceMappingURL=index.js.map