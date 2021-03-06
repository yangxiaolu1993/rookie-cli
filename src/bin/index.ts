#!/usr/bin/env node

import {ROOT_CLI_PATH} from '../utils/path'
import program from 'commander';
import { add } from '../commands/add'
import { create } from '../commands/create'
import { templateInfo } from '../commands/templateinfo'


// 定义当前版本
program
    .version(require(ROOT_CLI_PATH('package')).version)
    .usage('<command> [options]')

// 定义四个指令
program
    .command('create <template> <project> ')
    .description('初始化项目模板')
    .action(function (projectname) {
        create(program)
    })

program
    .command('add')
    .description('add a new template')
    .action(add)

program
    .command('template')
    .description('look template list')
    .action(templateInfo)

// 解析命令行参数
program.parse(process.argv)