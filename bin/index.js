#!/usr/bin/env node

const program = require('commander')

console.log('Hello Rookie-CLI')
// // 定义当前版本
// // 定义使用方法
// // 定义四个指令
program
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')


program
    .command('create <project>')
    .description('初始化项目模板')
    .action(function (env) {
        console.log('创建 rookie 项目开始')
    })
// 解析命令行参数
program.parse(process.argv)