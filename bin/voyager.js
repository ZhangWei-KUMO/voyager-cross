#!/usr/bin/env node

let program = require('commander');
program
  .version('0.0.1')
  .option('-i, --init', 'init a HTML template')

program.parse(process.argv);

if (program.init) {
  console.log("init a HTML template")
}