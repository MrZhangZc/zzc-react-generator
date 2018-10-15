'use strict'
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const structure = require('./data').items;
let args = process.argv.slice(2);
let cmd = args[0];
switch (cmd) {
    case 'init':
        let projectName = args[1];
        var rootName = `./${projectName}`;
        fs.mkdir(rootName, (err) => {
            if (err) {
                throw err;
            }
            structure.forEach((item) => {
                let type = item.type;
                if (type === 'dir') {
                    fs.mkdir(`${rootName}/${item.name}`, (err) => {
                        if (err) {
                            throw err;
                        }
                    })
                    console.log(`${rootName}/${item.name}`);
                } else if (type === 'file') {
                    fs.writeFile(`${rootName}/${item.name}`, item.content, (err) => {
                        if (err) {
                            console.log('failed')
                            throw err;
                        }
                    })
                    console.log(`${rootName}/${item.name}`);
                }

                if(item.items){
                    item.items.forEach((aitem) => {
                        let type = aitem.type;
                        if (type === 'dir') {
                            fs.mkdir(`${rootName}/${item.name}/${aitem.name}`, (err) => {
                                if (err) {
                                    throw err;
                                }
                            })
                            console.log(`${rootName}/${item.name}/${aitem.name}`);
                        } else if (type === 'file') {
                            fs.writeFile(`${rootName}/${item.name}/${aitem.name}`, aitem.content, (err) => {
                                if (err) {
                                    console.log('failed')
                                    throw err;
                                }
                            })
                            console.log(`${rootName}/${item.name}/${aitem.name}`);
                        }
                    }) 
                }
            })
            console.log(chalk.blue(`cd ${projectName}`))
            console.log(chalk.blue('yarn install'))
            console.log(chalk.blue('yarn start'))
            console.log(chalk.blue('打开浏览器访问 http://localhost:8080'))
        })
        break;
    case '-help':
        console.log(chalk.blue('zzc-react init [projectName]'), '创建项目')
        console.log(chalk.blue('zzc-react -v 查看版本'), '创建项目')
        break;
    case '-v':
        console.log(chalk.blue('2018/10/15 v0.0.1 关于react webpack的第一个版本'))
        break;
    default:
        console.log(chalk.red('zzc-react -help') , '查看帮助')
        break;
}