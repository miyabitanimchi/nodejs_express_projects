const asciiModules = require('./modules/asciiModules');
// const express = require('express');
// const app = express();
// const port = 3000;
const process = require('process');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})

const showAscii = (str) => {
  console.log(asciiModules.convertStrIntoUnicode(str));
}

const showStr = (...args) => {
  console.log(asciiModules.convertUnicodeIntoStr(...args));
}

showAscii(process.argv[2]);
showStr(process.argv[2], process.argv[3], process.argv[4]);

// console.log(asciiModules.convertStrIntoUnicode("water"));
// console.log(asciiModules.convertStrIntoUnicode("雅"));
// console.log(asciiModules.convertUnicodeIntoStr("12496", "65", "555", "7777"));
