const crypto = require("crypto");
const fs = require("fs");
const process = require("process");

// sha... secure hash algorithm
//algorithm to be used for hash
const algorithm = "sha256";
const hash = crypto.createHash(algorithm);

// reading the content of the file
const filename = process.argv[2];
// fs.createReadStream()... Opens up a readable stream
const file_data = fs.createReadStream(filename);

//passing the data to be hashed
file_data.on("data", (data) => {
  console.log(data);
  hash.update(data);
});

//Creating the hash in the required format and writing it in file
file_data.on("end", () => {
  const generate_hash = hash.digest("hex");
  console.log(
    `Hash generated using ${algorithm} \nHashed output is : ${generate_hash} \nFile name is ${filename}`
  );
});
