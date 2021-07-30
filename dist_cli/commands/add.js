"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// 交互式命令行
var inquirer = require('inquirer');
// 修改控制台字符串的样式
var chalk = require('chalk');
// node 内置文件模块
var fs = require('fs');
var path_1 = require("../utils/path");
function add() {
    return __awaiter(this, void 0, void 0, function () {
        var tplObj, question;
        return __generator(this, function (_a) {
            tplObj = require(path_1.ROOT_CLI_PATH('template'));
            question = [
                {
                    name: "name",
                    type: 'input',
                    message: "请输入模板名称",
                    validate: function (val) {
                        if (val === '') {
                            return 'Name is required!';
                        }
                        else if (tplObj[val]) {
                            return 'Template has already existed!';
                        }
                        else {
                            return true;
                        }
                    }
                },
                {
                    name: "url",
                    type: 'input',
                    message: "请输入模板地址",
                    validate: function (val) {
                        if (val === '')
                            return 'The url is required!';
                        return true;
                    }
                }
            ];
            inquirer
                .prompt(question).then(function (answers) {
                // answers 就是用户输入的内容，是个对象
                var name = answers.name, url = answers.url;
                // 过滤 unicode 字符
                tplObj[name] = url.replace(/[\u0000-\u0019]/g, '');
                // 把模板信息写入 template.json 文件中
                fs.writeFile(tplObj, JSON.stringify(tplObj), 'utf-8', function (err) {
                    if (err)
                        console.log(err);
                    console.log('\n');
                    console.log(chalk.green('Added successfully!\n'));
                    console.log(chalk.grey('The latest template list is: \n'));
                    console.log(tplObj);
                    console.log('\n');
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.add = add;
//# sourceMappingURL=add.js.map