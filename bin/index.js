#!/usr/bin/env node
const colors = require('colors');
const archy = require('archy');
const chalk = require('chalk');
const figlet = require('figlet');
const greet = require("../lib/greet");
const architecture = require('../architecture');
const menu = archy(architecture);

console.log(
  chalk.green(
    figlet.textSync('Cloud Wave Chain', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.green("一键部署后，请看README.md说明")
);
console.log(
  chalk.yellow("友情提示：")
);
console.log(
  chalk.yellow("没事不要乱升级包，出现warning请自动无视。又不是不能用，后期版本会处理")
);
console.log(
  chalk.yellow("实在搞不定了请拨打Bug热线：18662338435，微信：15502178435")
);

console.log(menu)