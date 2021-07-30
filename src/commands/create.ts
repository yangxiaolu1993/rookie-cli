
// 交互式命令行
const inquirer = require('inquirer')
// 修改控制台字符串的样式
const chalk = require('chalk')
// node 内置文件模块
const fs = require('fs')
import {ROOT_CLI_PATH} from '../utils/path'

export async function create(project:string) {
	
	console.log(`use rookie-cli create ${project}`)
}
