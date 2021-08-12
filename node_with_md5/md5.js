const crypto = require("crypto");
const process = require("process");

const hash = crypto.createHash("md5");

const data = hash.update(process.argv[2], "utf-8");

const generate_hash = data.digest("hex");

console.log(`Hash : ${generate_hash}`);
