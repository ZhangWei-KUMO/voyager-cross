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
    figlet.textSync('Cloud Wave', { horizontalLayout: 'full' })
  )
);

console.log(menu)