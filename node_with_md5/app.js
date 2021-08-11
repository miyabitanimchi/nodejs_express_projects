const crypto = require("crypto");
const process = require("process");

const hash = crypto.createHash("md5");

const data = hash.update("miyabi", "utf-8");

const generate_hash = data.digest("hex");

console.log(`Hash : ${generate_hash}`);

const hash2 = crypto.createHash("sha256", "key");

const data2 = hash2.update(process.argv[2]);

const generate_hash2 = data2.digest("hex");

console.log(`Hash : ${generate_hash2}`);

// with the module md5
const md5 = require("md5");

console.log(`md5 : ${md5(process.argv[3])}`);
