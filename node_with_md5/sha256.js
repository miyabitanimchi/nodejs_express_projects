const crypto = require("crypto");
const process = require("process");

const hash2 = crypto.createHash("sha256");

const data2 = hash2.update(process.argv[2], "utf-8");

const generate_hash2 = data2.digest("hex");

console.log(`Hash : ${generate_hash2}`);
