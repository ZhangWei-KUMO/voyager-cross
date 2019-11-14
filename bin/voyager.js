#!/usr/bin/env node
const path = require("path");
const program = require('commander');
const fs = require('fs-extra');
const vfs = require('vinyl-fs');
const archy = require('archy');
const architecture = require('../architecture');
const menu = archy(architecture);


program
  .version('0.0.1')
  .option('-i, --init [name]', 'init a HTML template')

program.parse(process.argv);

if (program.init) {
  let projectDirName = program.init;
  if (typeof projectDirName === "string") {
    var projectPath = path.resolve(projectDirName);
    console.log(`Initialing a next.js project in ${projectPath}`);
    fs.ensureDirSync(program.init);
    var templatePath = path.join(__dirname, '../template');
    vfs.src(['*', '!node_modules/*'], { cwd: templatePath, dot: true })
      .pipe(vfs.dest(projectDirName))
      .on('end', function () {
        console.log(menu)
        console.log('Installing packages...')
      })
      .resume();

  } else {
    console.log("Lacking project name, Please input your project name after 'voyager --init'")
  }
}