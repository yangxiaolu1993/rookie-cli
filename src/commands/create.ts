
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

export async function create(project: string) {

	console.log(`use rookie-cli create ${project}`)

	// 读取根目录下的 template
	const tplObj = ROOT_CLI_PATH('template')

	const tmpdir = path.join(ROOT_CLI_PATH(''), '', project)

	let url = 'https://github.com:yangxiaolu1993/rookie-cli#master'
	const spinner = ora("Downloading...");
	spinner.start();

	console.log(tmpdir)
	// 执行下载方法并传入参数
	download(
		url,
		project,
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
			console.log(`\n cd ${project} \n`)
		}
	)
}
