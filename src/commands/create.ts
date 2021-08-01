
// 交互式命令行
const inquirer = require('inquirer')
// 修改控制台字符串的样式
const chalk = require('chalk')
// node 内置文件模块
const os = require('os')
const path = require('path')
const ora = require('ora')
const download = require('download-git-repo')

import { ROOT_CLI_PATH } from '../utils/path'
// import { template } from '../template'

export async function create(program: {
	args:string[]
}) {
	// 读取根目录下的模板列表
	const tplObj = require(ROOT_CLI_PATH('template'))
	
	let templateName = program.args[0]
	let projectName = program.args[0]
	// 小小校验一下参数
	if (!tplObj[templateName]) {
		console.log(chalk.red('\n Template does not exit! \n '))
		return
	}
	if (!projectName) {
		console.log(chalk.red('\n Project should not be empty! \n '))
		return
	}

	console.log(`use rookie-cli create ${projectName}`)

	let url = 'https://github.com:yangxiaolu1993/rookie-cli#rookie-cli-template'
	const spinner = ora("Downloading...");
	spinner.start();

	// 执行下载方法并传入参数
	download(
		url,
		projectName,
		{ clone: true },
		(err: any) => {
			if (err) {
				spinner.fail();
				console.log(chalk.red(`Generation failed. ${err}`))
				return
			}
			// 结束加载图标
			spinner.succeed();
			console.log(chalk.green('\n Generation completed!'))
			console.log('\n To get started')
			console.log(`\n cd ${projectName} \n`)
		}
	)
}
