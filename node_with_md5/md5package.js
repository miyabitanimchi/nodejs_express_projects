const process = require("process");

const md5 = require("md5");

console.log(`md5 : ${md5(process.argv[2])}`);
