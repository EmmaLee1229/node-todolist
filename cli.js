#!/usr/bin/env node
const program = require('commander')
const api = require('./index.js')
const pkg = require('./package.json')
program
    .version(pkg.version)
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join(' ')
        console.log(words)
        api.add(words).then(()=>{
            console.log('添加成功')
        },()=>{
            console.log('添加失败')
        })
    })
program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(()=>{
            console.log('删除成功')
        },()=>{
            console.log('删除失败')
        })
    })


program.parse(process.argv);
if(process.argv.length ===2){
    //说明用户直接运行 node cli.js
    void api.showAll()
}

// if (program.debug) console.log(program.opts());
// console.log('pizza details:');
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);