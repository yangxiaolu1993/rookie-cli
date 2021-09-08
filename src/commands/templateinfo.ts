
// 交互式命令行
const inquirer = require('inquirer')
// 修改控制台字符串的样式
const chalk = require('chalk')
// node 内置文件模块
const fs = require('fs')
import { ROOT_CLI_PATH } from '../utils/path'

export async function templateInfo() {

	// 读取根目录下的 template.json
	const tplObj = require(ROOT_CLI_PATH('template'))
	console.log('\n')
	Object.keys(tplObj).forEach(name=>{
        console.log(`${chalk.green(name)} --  ${tplObj[name]}\n`)
    })
}
