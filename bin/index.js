#!/usr/bin/env node
const colors = require('colors');
const archy = require('archy')
const greet = require("../lib/greet");
const architecture = require('../architecture');
const menu = archy(architecture);

console.log(
  colors.rainbow("恭喜您使用云帧数浪工具箱")
);

console.log(menu)